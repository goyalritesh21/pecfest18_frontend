import React, { Component } from 'react'
import Event_registrations from './event registrations'
import Notifications from "./notifications";
//import './dashboard.css ';

class Dashboardcreate extends Component {
    render() {
        return (
            <div>
                <h2 style={{paddingTop: '2em'}}>Notifications</h2>
                <Notifications
                    event="Event"
                    timeofupdate="Time Of Update"
                    update="Update"/>

                {/*<hr className="border1" style={{borderTop: '3px solid #833fb2', width: '50%',align:'left',size:'80px'}}/>*/}

                <Notifications
                    event="Battle of the Bands"
                    timeofupdate="12:04pm"
                    update="The venue for the event has been changed from L-11 to the Auditorium"/>


                {/*<hr className="border2" style={{borderTop: '3px solid #e22947', width: '50%'}}/>*/}

                <h2 style={{paddingTop: '2em'}}>Events Registered for:</h2>


                {/*Heading may be removed for each field, if required*/}
                {/* can remove one or more of the following fields if we plan on giving
                         linking to event page through it's name*/}
                <Event_registrations
                    event="Event"
                    date="Date"
                    venue="Venue"
                    time="Time of the Event"
                    timeofreg="Time of Registration"
                />
                {/*<hr className="border1" style={{borderTop: '3px solid #833fb2', width: '50%',align:'left',size:'80px'}}/>*/}

                <Event_registrations
                    event="hackathon"
                    date="28 October 2017"
                    venue="New academic block"
                    time="9am-9 pm"
                    timeofreg="8:40am"
                />
                {/*CHECK if there are spl data tyoes for date and time*/}
            </div>)
    }
    }
export default Dashboardcreate;