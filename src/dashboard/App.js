import React, { Component } from 'react';
import blank_img from './blank.png'
//import { Grid, Cell } from 'react-mdl';
import './App.css';
//import ProgressCircle from 'react-native-progress-circle';
//import ProgressBar from './ProgressBar.js'

class App extends Component{
	render(){
		return (
			<div id="main-div">
			<div className="grid-container">
			<div className="grid-item left-side center">
				<div className="notification-window">
				Notification Window
				</div>
				<div className="registeredEvents">
				Registered Events
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

export default App;