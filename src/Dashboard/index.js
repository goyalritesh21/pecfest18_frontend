import React, { Component } from 'react';
import blank_img from './blank.png'
//import { Grid, Cell } from 'react-mdl';
import './index.css';
//import ProgressCircle from 'react-native-progress-circle';
//import ProgressBar from './ProgressBar.js'
import Event_registrations from './registeredEvents'
import Notifications from "./notification";

class Dashboard extends Component{
    render(){
        return (
            <div id="main-div">
                <div className="grid-container">
                    <div className="grid-item left-side center">
                        <h2 style={{paddingTop: '0em'}}>Notifications</h2>
                        <div className="notification-window notifs">
                        <Notifications
                            event="Event"
                            timeofupdate="Time Of Update"
                            update="Update"/>

                        <Notifications
                            event="Battle of the Bands"
                            timeofupdate="12:04pm"
                            update="The venue for the event has been changed from L-11 to the Auditorium"/>
                            <Notifications
                                event="Battle of the Bands"
                                timeofupdate="12:04pm"
                                update="The venue for the event has been changed from L-11 to the Auditorium"/>
                            <Notifications
                                event="Battle of the Bands"
                                timeofupdate="12:04pm"
                                update="The venue for the event has been changed from L-11 to the Auditorium"/>
                            <Notifications
                                event="Battle of the Bands"
                                timeofupdate="12:04pm"
                                update="The venue for the event has been changed from L-11 to the Auditorium"/>
                            <Notifications
                                event="Battle of the Bands"
                                timeofupdate="12:04pm"
                                update="The venue for the event has been changed from L-11 to the Auditorium"/>
                        </div>

                        <h2 style={{paddingTop: '0em'}}>Registered Events</h2>
                        <div className="registeredEvents notifs">

                        <Event_registrations
                            event="Event"
                            date="Date"
                            venue="Venue"
                            time="Time of the Event"
                            timeofreg="Time of Registration"
                        />

                        <Event_registrations
                            event="hackathon"
                            date="28 October 2017"
                            venue="New academic block"
                            time="9am-9 pm"
                            timeofreg="8:40am"
                        />
                            <Event_registrations
                                event="hackathon"
                                date="28 October 2017"
                                venue="New academic block"
                                time="9am-9 pm"
                                timeofreg="8:40am"
                            />
                            <Event_registrations
                                event="hackathon"
                                date="28 October 2017"
                                venue="New academic block"
                                time="9am-9 pm"
                                timeofreg="8:40am"
                            />
                            <Event_registrations
                                event="hackathon"
                                date="28 October 2017"
                                venue="New academic block"
                                time="9am-9 pm"
                                timeofreg="8:40am"
                            />
                            <Event_registrations
                                event="hackathon"
                                date="28 October 2017"
                                venue="New academic block"
                                time="9am-9 pm"
                                timeofreg="8:40am"
                            />
                            <Event_registrations
                                event="hackathon"
                                date="28 October 2017"
                                venue="New academic block"
                                time="9am-9 pm"
                                timeofreg="8:40am"
                            />
                        </div>

                    </div>
                    <div className="grid-item right-side">
                        <div className="center">
                            <h1>PECFEST 2018</h1>
                            {/*Comment : User Image*/}
                            <img className="user-avatar"
                                 src={blank_img} alt=""
                            />

                            <h2>Aakankasha Sharma</h2>
                        </div>
                        <div className="remaining-info-user">
                            <hr style={{borderTop: '3px solid'}}/>
                            <p>Participant, Pecfest 2018</p>

                            <br /><br />
                            <div className="grid-container-card">
                                <div className="grid-item">
                                    <div className="card">
                                        <div className="container">
                                            <h4><b>12</b></h4>
                                            Events Participated
                                        </div>
                                    </div>
                                </div>

                                <div className="grid-item">
                                    <div className="card">
                                        <div className="container">
                                            <h4><b>10</b></h4>
                                            Events Won
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;