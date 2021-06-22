import React from 'react';

import './Events.css';

const EventsList = [
    {
        title: 'Sequence Weekly Meeting',
        location: 'Sri Lanka',
        timezone: 'Asia/Colombo',
        start_date: '07-06-2021',
        end_date: '07-06-2021',
        start_time: '05:00 PM',
        end_time: '06:30 PM',
        description: 'This should be good meeting an we are the Sequence. This should be good meeting an we are the Sequence.'
    },
    {
        title: 'Sequence Weekly Meeting',
        location: 'Sri Lanka',
        timezone: 'Asia/Colombo',
        start_date: '07-06-2021',
        end_date: '07-06-2021',
        start_time: '05:00 PM',
        end_time: '06:30 PM',
        description: 'This should be good meeting an we are the Sequence. This should be good meeting an we are the Sequence.'
    },
    {
        title: 'Sequence Weekly Meeting',
        location: 'Sri Lanka',
        timezone: 'Asia/Colombo',
        start_date: '07-06-2021',
        end_date: '07-06-2021',
        start_time: '05:00 PM',
        end_time: '06:30 PM',
        description: 'This should be good meeting an we are the Sequence. This should be good meeting an we are the Sequence.'
    },
    {
        title: 'Sequence Weekly Meeting',
        location: 'Sri Lanka',
        timezone: 'Asia/Colombo',
        start_date: '07-06-2021',
        end_date: '07-06-2021',
        start_time: '05:00 PM',
        end_time: '06:30 PM',
        description: 'This should be good meeting an we are the Sequence. This should be good meeting an we are the Sequence.'
    },
    
];

const eventitem = EventsList.map((i) => {
    return (
    
                <div className="inner2">
                    <h3 className="topic2">{i.title}</h3>
                    <br/>
                    <h5>{i.start_date} @ {i.start_time} in {i.location}</h5>
                    <p>
                        {i.description}
                    </p>
                   
                    <div title="Add to Calendar" class="addeventatc">
                        Add to Calendar
                        <span class="start">{i.start_date} {i.start_time}</span>
                        <span class="end">{i.end_date} {i.end_time}</span>
                        <span class="timezone">{i.timezone}</span>
                        <span class="title">{i.title}</span>
                        <span class="description">{i.description}</span>
                        <span class="location">{i.location}</span>
                    </div>
                </div>
         
    );
})


const Events = props => {
    return(
        <div>
            <br/>
            {eventitem}
        </div>
    );
}

export default Events;