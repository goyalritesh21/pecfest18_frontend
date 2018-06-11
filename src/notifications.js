import React, { Component } from 'react'
import './dashboard.css'


class Notifications extends Component {
    render(){
        return(
            <div>
                <div className="grid-event">
                    <div className="grid-item">{this.props.event}</div>
                    <div className="grid-item">{this.props.timeofupdate}</div>
                    <div className="grid-item3">{this.props.update}</div>
                </div>
            </div>


        )
    }
}
export default Notifications;