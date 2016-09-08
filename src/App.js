import React, { Component } from 'react';
import firebaseApp from './firebase/Firebase';
import { hashHistory } from 'react-router'
import Navbar from './Navbar';
import './css/font-awesome.css'
import './css/bootstrap-social.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {loggedin: false};
  }
  componentWillMount(){
    let _this = this;
    firebaseApp.auth().onAuthStateChanged(function(user) {
      if (user) {
        //if logged in...
        _this.setState({loggedin: true});
          hashHistory.push('/dashboard'); //after login, redirect to dashboard
      } else {
        //if not logged in...
        _this.setState({loggedin: false});
      }
    });
  } 
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h4>React / Firebase with Authentication</h4>
          <a className="btn btn-block btn-social btn-github" href="https://github.com/zerostatic/react-firebase-authentication">
            <span className="fa fa-github"></span> View on GitHub
          </a>
        </div>
        <Navbar loggedin={this.state.loggedin} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
