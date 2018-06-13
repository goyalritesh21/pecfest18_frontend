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