import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    state = {
        navigation : false
    }

    handleClick = () => {
        this.setState({ navigation: true });
    }

    handleClose = () => {
        this.setState({ navigation: false });
    }

    render() {
        return (
            this.state.navigation ?
                <div>
                    <nav className="top-right open">
                        <a>
                        </a>
                        <a href="pecfest2016" className="disc l0">
                            <div>Pecfest 2017</div>
                        </a>
                        <div >
                            <a href = "activities" className="disc l1">
                                <div>Events</div>
                            </a>
                        </div>
                        <div>
                            <a href = "sponsors" className="disc l2">
                                <div>Sponsors</div>
                            </a>
                        </div>
                        <a href = "team" className="disc l3">
                            <div>Team</div>
                        </a>
                        <a href = "hospitality" className="disc l4">
                            <div>Hospitality</div>
                        </a>
                        <div>
                            <a href = "social"  className="disc l5">
                                <div>Social</div>
                            </a>
                        </div>
                        <div href = ""  className="disc l6">
                            <a >
                                <div>Home</div>
                            </a>
                        </div>
                        <a className="disc l7 toggle" onClick={() => {this.handleClose()}}>
                            Close
                        </a>
                    </nav>
                </div>:
                <div>
                    <nav className="top-right open">
                        <a className="disc l7 toggle" onClick={() => {this.handleClick()}}>
                            Menu
                        </a>
                    </nav>
                </div>
        );
    }
}

export default Nav;