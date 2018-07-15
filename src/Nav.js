import React, {Component} from 'react';
import './Nav.css';

class Nav extends Component {
  state = {
    navigation: false
  }

  handleClick = () => {
    this.setState({navigation: true});
  }

  handleClose = () => {
    this.setState({navigation: false});
  }

  render() {
    return (
      this.state.navigation ?
        <div>
          <nav className="top-right open">
            <a></a>
            <div>
              <a href="../pecfest2017" className="disc l0">
                <div>Pecfest 2017</div>
              </a>
            </div>
            <div>
              <a href="../hospitality" className="disc l1">
                <div>Hospitality</div>
              </a>
            </div>
            <div>
              <a href="../sponsors" className="disc l2">
                <div>Sponsors</div>
              </a>
            </div>
            <div>
              <a href="../social" className="disc l3">
                <div>Social</div>
              </a>
            </div>
            <div>
              <a href="../activities" className="disc l4">
                <div>Events</div>
              </a>
            </div>
            <div>
              <a href="../Team" className="disc l5">
                <div>Team</div>
              </a>
            </div>
            <div>
              <a href="/" className="disc l6">
                <div>Home</div>
              </a>
            </div>
            <a className="disc l7 toggle" onClick={() => {
              this.handleClose()
            }}>
              Close
            </a>
          </nav>
        </div> :
        <div>
          <nav className="top-right open">
            <a className="disc l7 toggle" onClick={() => {
              this.handleClick()
            }}>
              Menu
            </a>
          </nav>
        </div>
    );
  }
}

export default Nav;