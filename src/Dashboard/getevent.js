import React, { Component } from 'react';
import { api }from './eventdb';

class getevent extends Component {

    constructor() {
        super();
        this.state = {
            events_reglist :[],
        };
    }
    //}
// assuming array returned by backend is events_dict[]
    componentwillmountNotifications()
    {
        fetch('http://127.0.0.1:5000/user/notifications')
            .then(results=>{
                return results.json();
            }).then(data=>{
            let events_reglist=data.results.map((register)=>{
                return(
                    <div key={register.results}>
                        <li>event={register.events_dict.name}</li>
                        <li>day={register.events_dict.day}</li>
                        <li>venue={register.events_dict.venue}</li>
                        <li>time={register.events_dict.time}</li>
                    </div>
                )
            })
            this.setState({events_reglist:events_reglist});
            //console.log("state",this.state.notifications);
        })
    }
    render(){
        return(
            <div>
                {this.state.events_reglist}
            </div>
        )
    }
}
export default getevent;

/*getData()
{
    let data=fetch('http://127.0.0.1:5000/user/notifications')
        .then((res)=>{
            res.json().then((resp)=>{
            console.log(res.events_dict)
                this.setState({data:resp.events_dict})
            })
        })
}

render()
    {
    return (
        <div>
            {this.state.data ? this.state.data.map((item)=>
                <div>
                    <h3>{item.eventName}</h3>
                    <h3>{item.timeofupdate}</h3>
                    <h3>{item.notificationDetails}</h3>
                </div>

                )

             :
            <h3>Wait...data is fetching</h3>}
        </div>
//checking if data is present in the current object ; then print o/p else print error msg


    )
    }
}*/

