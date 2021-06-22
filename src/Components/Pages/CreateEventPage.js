import React, { Component } from 'react';
import './CreateEventPage.css';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'


class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventTitle: '',
        }
    }

    eventTitleHandler = event => {
        this.setState({
            eventTitle: event.target.value,
        })
    }

    // handleSubmit = event => {
    //     alert(`Success! ${this.state.eventTitle}`)
    //     event.preventDefault()
    // }

    render() {
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
                                        <input type="text" className="form-control" placeholder="My Event" value={this.state.eventTitle} onChange={this.eventTitleHandler}/>
                                        <br />
                                    </MDBCol>

                                </MDBRow>

                                <MDBRow>
                                    <MDBCol>

                                        <label className="label-text">
                                            Event location
                                        </label>
                                        <input type="text" className="form-control" placeholder="Sri Lanka" />
                                        <br />
                                    </MDBCol>

                                    <MDBCol>
                                        <label className="label-text">
                                            The timezone
                                        </label>
                                        <select className="form-control">
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
                                        <input type="date" className="form-control" />
                                        <br />

                                        <label className="label-text">
                                            Start Time
                                        </label>
                                        <input type="time" className="form-control" />
                                        <br />
                                    </MDBCol>

                                    <MDBCol>
                                        <label className="label-text">
                                            End Date
                                        </label>
                                        <input type="date" className="form-control" />
                                        <br />

                                        <label className="label-text">
                                            End Time
                                        </label>
                                        <input type="time" className="form-control" />
                                        <br />
                                    </MDBCol>
                                </MDBRow>

                                <MDBRow>
                                    <MDBCol>
                                        <label className="label-text">
                                            Say something about your event!
                                        </label>
                                        <textarea className="form-control" placeholder="Woohaa..">
                                        </textarea>
                                        <br />

                                    </MDBCol>
                                </MDBRow>

                                <div className="text-center">

                                   
                                </div>
                            </form>
                            <Link to="/events" exact>
                                <button className="btn-grad my-button">Create Now!</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEvent;
