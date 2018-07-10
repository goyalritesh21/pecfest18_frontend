import React, { Component } from 'react';
import { api }from './eventdb';

class getnotif extends Component {

    constructor() {
        super();
        this.state = {
            notifications: [],
        };
    }

    //}
// ASSUMING   array returned by backend is notif_dict[] . JSON feed being
    //   notif_dict{
//       { name: "  ", timeofupdate:" "  ...}
//          {name:" ", time:" " ....}
//           something like this


    componentwillmountNotifications() {
        fetch('http://127.0.0.1:5000/user/notifications')
            .then(results => {
                return results.json();
            }).then(data => {
            let notifications = data.results.map((notify) => {
                return (
                    <div key={notify.results}>
                        <li> event={notify.notif_dict.eventName}</li>
                        <li> time={notify.notif_dict.timeofupdate}</li>
                        <li>update={notify.notif_dict.notificationDetails}</li>
                    </div>
                )
            })
            this.setState({notifications: notifications});
            //console.log("state",this.state.notifications);
        })
    }

    render() {
        return (
            <div>
                {this.state.notifications}
            </div>
        )
    }
}
export default getnotif;

    /*getData()
    {
        let data=fetch('http://127.0.0.1:5000/user/notifications')
            .then((res)=>{
                res.json().then((resp)=>{
                console.log(res.notif_dict)
                    this.setState({data:resp.notif_dict})
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

