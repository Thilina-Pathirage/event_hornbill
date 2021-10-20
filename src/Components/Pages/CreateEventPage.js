import './CreateEventPage.css';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit'
import { useState } from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';


const CreateNewEvent = () => {

    const useStyles = makeStyles(() => ({

        "@global": {
            body: {
                backgroundColor: `#000`,
            },
        },
        blurContainer: {
            border: `solid #00FFFF 1px`,
            transitionDuration: "0.5s",
        },
    }))

    const classes = useStyles();

    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [timezone, setTimezone] = useState("");
    const [start_date, setStartDate] = useState("");
    const [end_date, setEndDate] = useState("");
    const [start_time, setStartTime] = useState("");
    const [end_time, setEndTime] = useState("");
    const [online_link, setLink] = useState("");
    const [description, setDescription] = useState("");

    const titleHandler = event => {
        setTitle(event.target.value);
    }

    const locationHandler = event => {
        setLocation(event.target.value);
    }

    const timezoneHandler = event => {
        setTimezone(event.target.value);
    }

    const startDateHandler = event => {
        setStartDate(event.target.value);
    }

    const startTimeHandler = event => {
        setStartTime(event.target.value);
    }

    const endDateHandler = event => {
        setEndDate(event.target.value);
    }

    const endTimeHandler = event => {
        setEndTime(event.target.value);
    }

    const onlineLinkHandler = event => {
        setLink(event.target.value);
    }

    const descriptionHandler = event => {
        setDescription(event.target.value);
    }

    const addToList = () => {

        if (title === "") {
            alert("title field cannot be empty!");
        }
        else if (location === "") {
            alert("location field cannot be empty!");
        }
        else if (timezone === "") {
            alert("timezone field cannot be empty!");
        }
        else if (start_date === "") {
            alert("start_date field cannot be empty!");
        }
        else if (end_date === "") {
            alert("end_date field cannot be empty!");
        }
        else if (start_time === "") {
            alert("start_time field cannot be empty!");
        }
        else if (end_time === "") {
            alert("end_time field cannot be empty!");
        }
        else if (description === "") {
            alert("description field cannot be empty!");
        }
        else {
            Axios.post("https://event-portal-thilina.herokuapp.com/", {
                title: title ? title : "Title",
                location: location ? location : "empty",
                timezone: timezone ? timezone : "empty",
                start_date: start_date ? start_date : "empty",
                end_date: end_date ? end_date : "empty",
                start_time: start_time ? start_time : "empty",
                end_time: end_time ? end_time : "empty",
                online_link: online_link ? online_link : "",
                description: description ? description : "empty",
            }).then(Redirect);
        }
    }

    const Redirect = () => {
        window.location.href = "/";
    }

    return (
        <React.Fragment>
            <div id="blur-container" className={classes.blurContainer}>

                <div className="form-card center-no-text" >
                    <div className="form-div">
                        <form>
                            <MDBRow>
                                <MDBCol>
                                    <label className="label-text">
                                        Event title here!
                                    </label>
                                    <input type="text" className="form-control" placeholder="My Event" onChange={titleHandler} />
                                    <br />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol>
                                    <label className="label-text">
                                        Event location
                                    </label>
                                    <input type="text" className="form-control" placeholder="Sri Lanka" onChange={locationHandler} />
                                    <br />
                                </MDBCol>

                                <MDBCol>
                                    <label className="label-text">
                                        The timezone
                                    </label>
                                    <select className="form-control" onChange={timezoneHandler} >
                                        <option> - select - </option>
                                        <option value="Asia/Colombo" className={classes.zone}>Asia/Colombo</option>
                                    </select>
                                    <br />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol>
                                    <label className="label-text">
                                        Start Date
                                    </label>
                                    <input type="date" className="form-control" onChange={startDateHandler} />
                                    <br />

                                    <label className="label-text">
                                        Start Time
                                    </label>
                                    <input type="time" className="form-control" onChange={startTimeHandler} />
                                    <br />
                                </MDBCol>

                                <MDBCol>
                                    <label className="label-text">
                                        End Date
                                    </label>
                                    <input type="date" className="form-control" onChange={endDateHandler} />
                                    <br />

                                    <label className="label-text">
                                        End Time
                                    </label>
                                    <input type="time" className="form-control" onChange={endTimeHandler} />
                                    <br />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol>
                                    <label className="label-text">
                                        Event link here
                                    </label>
                                    <input type="text" className="form-control" placeholder="Online Link" onChange={onlineLinkHandler} />
                                    <br />
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol>
                                    <label className="label-text">
                                        Say something about your event!
                                    </label>
                                    <textarea className="form-control" placeholder="Woohaaa.." onChange={descriptionHandler} >
                                    </textarea>
                                    <br />
                                </MDBCol>
                            </MDBRow>

                        </form>
                        <input className="create-button center" type="submit" onClick={addToList} value="Create Now!" />
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default CreateNewEvent;
