import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MDBCol, MDBRow, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import './Events.css';
import { Link } from 'react-router-dom';
import CoverImage from '../images/eventcover.png';
import { makeStyles } from '@material-ui/core/styles';

const Events = () => {

    const [bgColorCard, setBgColorCard] = useState("0, 247, 255,");

    const [opacity, setOpacity] = useState(1);
    const [mainColor, setMainColor] = useState("#00FFFF");

    const useStyles = makeStyles(() => ({

        "@global": {
            body: {
                backgroundColor: `#000`,
                transitionDuration: "0.5s",
            },
        },
        eventCard: {
            backgroundImage: `linear-gradient(90deg , #000,#000, #000, rgb(0, 0, 0, 0) )`,
            backgroundColor: `rgb( ${bgColorCard} ${opacity})`,
            transitionDuration: "0.5s",
        },
        blurContainer: {
            border: `solid rgb( ${bgColorCard} 1) 1px`,
            transitionDuration: "0.5s",
        },
        addButton: {
            backgroundColor: `${mainColor}`,
            border: `solid ${mainColor} 2px`
        },
        Button2: {
            color: `${mainColor} !important`,
            border: `solid ${mainColor} 2px`
        },
        Button3: {
            color: `${mainColor} !important`,
            border: `solid ${mainColor} 2px`
        }
    }))

    const classes = useStyles();

    const setStyles = (Opc, bg, mColor, bgCard) => {
        setOpacity(Opc);
        setMainColor(mColor);
        setBgColorCard(bgCard);
    }

    const [events, setEvents] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3001/events").then(res => {
            setEvents(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    const deleteEvent = (id) => {
        Axios.delete(`https://event-portal-thilina.herokuapp.com/delete/${id}`).then(Redirect2);
    }

    const Redirect2 = () => {
        window.location.href = "/";
    }

    const addEvent = (title, timezone, description, location) => {
        window.location.href = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${title}&dates=20210721T220000/20210722T230000&ctz=${timezone}&details=${description}&location=${location}`;
    }

    const eventItem = events.slice(0).reverse().map((i, k) => {
        return (

            <div key={k}>
                <div className={classes.eventCard} id="event-card">
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
                                <Link onMouseEnter={() => { setStyles(1, "89, 198, 255,", "rgb(89, 198, 255)", "89, 198, 255,") }} onMouseLeave={() => { setStyles(1, "0, 0, 0,", "#00FFFF", "0, 247, 255,") }} to="" id="add-button" className={classes.addButton} onClick={() => addEvent(i.title, i.timezone, i.description, i.location)}>Add to Calendar</Link>
                                {i.online_link ? <a onMouseEnter={() => { setStyles(1, "0, 255, 172,", "rgb(0, 255, 172)", "0, 255, 172,") }} onMouseLeave={() => { setStyles(1, "0, 0, 0,", "#00FFFF", "0, 247, 255,") }} id="my-button2" className={classes.Button2} href={i.online_link}>Join now!</a> : ""}
                                <Link onMouseEnter={() => { setStyles(1, "255, 234, 161,", "rgb(255, 234, 161)", "255, 234, 161,") }} onMouseLeave={() => { setStyles(1, "0, 0, 0,", "#00FFFF", "0, 247, 255,") }} to="" id="my-button3" className={classes.Button3} onClick={() => deleteEvent(i._id)}>Delete</Link>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </div>
            </div>
        );
    })

    return (

        <React.Fragment>
            <div id="blur-container" className={classes.blurContainer}>

                <div className={classes.testDiv} >
                    <br />
                    {eventItem}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Events;
