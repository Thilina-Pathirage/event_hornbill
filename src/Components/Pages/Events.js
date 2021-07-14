import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MDBCol, MDBRow, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import './Events.css';
import { Link } from 'react-router-dom';
import CoverImage from '../images/eventcover.png';
import { makeStyles } from '@material-ui/core/styles';

const Events = () => {
    
    const [bgColor, setBgColor] = useState("0, 0, 0,");
    const [opacity, setOpacity] = useState(1);

    const useStyles = makeStyles (() => ({

        "@global": {
          body: {
            backgroundImage: `linear-gradient(to left, #000,#000, #000, rgb(0, 0, 0, 0) )`,
            backgroundColor: `rgb( ${bgColor} ${opacity})`,
            transitionDuration: "0.5s",
          },
        },
    }))

    const classes = useStyles();

    const setStyles = (Opc,bg) => {
         setBgColor(bg);
        setOpacity(Opc)
    }

    const [events, setEvents] = useState([]);
    useEffect(() => {
        Axios.get("https://event-portal-thilina.herokuapp.com/events").then(res => {
            setEvents(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    const deleteEvent = (id) => {
        Axios.delete(`https://event-portal-thilina.herokuapp.com/delete/${id}`).then(Redirect);
    }

    const Redirect = () => {
        window.location.href = "/events";
    }

    const addEvent = (title) => {
        window.location.href = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${title}&dates=20210721T220000/20210722T230000&ctz=Asia/Colombo&details=In+publishing+and+graphic+design,+Lorem+ipsum+is+a+placeholder+text+commonly+used+to+demonstrate+the+visual+form+of+a+document+or+a+typeface+without+relying+on+meaningful+content.&location=Sri+Lanka&pli=1&uid=1625852590addeventcom&sf=true&output=xml`;
    }

    const eventItem = events.slice(0).reverse().map((i, k) => {
        return (

            <div key={k}>
                <div className="event-card" id="event-card" >
                    <MDBRow>
                        <MDBCol className="col-one center col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" md="3">
                            <div className="event-cover img-fluid" >
                                <MDBCardImage alt="event cover" className="img-fluid" src={CoverImage} />
                            </div>
                        </MDBCol>
                        <MDBCol className="col-two col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" md="9">
                            <MDBCardBody className="card-body">
                                <MDBCardTitle>{i.title}</MDBCardTitle>

                                <MDBCardText>
                                    <small>{i.start_date} @ {i.start_time} in {i.location}</small>
                                </MDBCardText>
                                <MDBCardText>
                                    {i.description}
                                </MDBCardText>
                                <Link onMouseEnter={() => {setStyles(1, "0, 59, 187,")}} onMouseLeave={() => {setStyles(1,"0, 0, 0,")}} to="" className="add-button" onClick={() => addEvent(i.title)}>Add to Calendar</Link>
                                {i.online_link ? <a onMouseEnter={() => {setStyles(1, "6, 187, 0,")}} onMouseLeave={() => {setStyles(1,"0, 0, 0,")}}  className="my-button2" href={i.online_link}>Join now!</a> : ""}
                                <Link onMouseEnter={() => {setStyles(1, "255, 123, 0,")}} onMouseLeave={() => {setStyles(1,"0, 0, 0,")}}  to="" className="my-button2" onClick={() => deleteEvent(i._id)}>Delete</Link>
                            
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </div>
            </div>
        );
    })

    return (
        <div className={classes.testDiv} >
            <br />
            {eventItem}
        </div>
    );
}

export default Events;
