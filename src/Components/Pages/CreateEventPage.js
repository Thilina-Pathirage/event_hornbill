import './CreateEventPage.css';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit'
import { useState } from 'react';
import Axios from 'axios'


const CreateNewEvent = () => {

    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [timezone, setTimezone] = useState("");
    const [start_date, setStartDate] = useState("");
    const [end_date, setEndDate] = useState("");
    const [start_time, setStartTime] = useState("");
    const [end_time, setEndTime] = useState("");
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

    const descriptionHandler = event => {
        setDescription(event.target.value);
    }

    const addToList = () => {
        Axios.post("http://localhost:3001/", {
            title: title,
            location: location,
            timezone: timezone,
            start_date: start_date,
            end_date: end_date,
            start_time: start_time,
            end_time: end_time,
            description: description,
        }).then(
            window.location.href="/events",
        )
    }

    return (
        <div className="outer">
            <div className="middle">
                <div className="inner">
                    <h2 className="center topic">Create New Event</h2>
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
                                    <select className="form-control" onChange={timezoneHandler}>
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
                                        Say something about your event!
                                    </label>
                                    <textarea className="form-control" placeholder="Woohaaa.." onChange={descriptionHandler}>
                                    </textarea>
                                    <br />

                                </MDBCol>
                            </MDBRow>
                        </form>
                        <button className="btn-grad my-button" onClick={addToList}>Create Now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateNewEvent