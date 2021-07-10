import './CreateEventPage.css';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const CreateNewEvent = () => {

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

        Axios.post("https://event-portal-thilina.herokuapp.com/", {
            title: title,
            location: location,
            timezone: timezone,
            start_date: start_date,
            end_date: end_date,
            start_time: start_time,
            end_time: end_time,
            online_link: online_link,
            description: description,
        }).then(Redirect);
    }

    const Redirect = () => {
        window.location.href = "/";
    }

    return (
        <div className="form-card center-no-text">
            <div className="form-div">
                <form>
                    <MDBRow>
                        <MDBCol>
                            <label className="label-text">
                                Event title here!
                            </label>
                            <input type="text" className="form-control" placeholder="My Event" onChange={titleHandler} required />
                            <br />
                        </MDBCol>

                    </MDBRow>

                    <MDBRow>
                        <MDBCol>
                            <label className="label-text">
                                Event location
                            </label>
                            <input type="text" className="form-control" placeholder="Sri Lanka" onChange={locationHandler} required />
                            <br />
                        </MDBCol>

                        <MDBCol>
                            <label className="label-text">
                                The timezone
                            </label>
                            <select className="form-control" onChange={timezoneHandler} required>
                                <option> - select - </option>
                                <option value="Asia/Colombo" >Asia/Colombo</option>
                            </select>
                            <br />
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol>
                            <label className="label-text">
                                Start Date
                            </label>
                            <input type="date" className="form-control" onChange={startDateHandler} required />
                            <br />

                            <label className="label-text">
                                Start Time
                            </label>
                            <input type="time" className="form-control" onChange={startTimeHandler} required />
                            <br />
                        </MDBCol>

                        <MDBCol>
                            <label className="label-text">
                                End Date
                            </label>
                            <input type="date" className="form-control" onChange={endDateHandler} required />
                            <br />

                            <label className="label-text">
                                End Time
                            </label>
                            <input type="time" className="form-control" onChange={endTimeHandler} required />
                            <br />
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol>
                            <label className="label-text">
                                Event link here
                            </label>
                            <input className="form-control" placeholder="Online Link" onChange={onlineLinkHandler} />
                            <br />
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol>
                            <label className="label-text">
                                Say something about your event!
                            </label>
                            <textarea className="form-control" placeholder="Woohaaa.." onChange={descriptionHandler} required>
                            </textarea>
                            <br />
                        </MDBCol>
                    </MDBRow>
                    <Link to="" className="create-button center" onClick={addToList}>Create Now!</Link>
                </form>
            </div>
        </div>
    ); 
}

export default CreateNewEvent;