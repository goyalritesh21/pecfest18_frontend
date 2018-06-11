import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import './images';
//import App from './App';
//import PECFEST from './PECFEST';
import  Dasboardcreate from './dashboard'
import registerServiceWorker from './registerServiceWorker';

/*class Container extends Component {
	state = {
		begin: false
	}

	render() {
		return (
			<div>
				{
					this.state.begin ? <PECFEST /> : <App onComplete={() => this.setState({ begin: true })}/>
				}
			</div>
		)
	}
}
*/

ReactDOM.render(<Dasboardcreate/>, document.getElementById('root'));
registerServiceWorker();
