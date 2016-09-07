import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router'
import firebaseApp from './firebase/Firebase';

class Navbar extends Component {
  constructor(props) {
      super(props);
      //
      this.signout = this.signout.bind(this);
  }
  signout(){
    firebaseApp.auth().signOut().then(function() {
      console.log("sign out succesful");
      hashHistory.push('/login');
    }, function(error) {
      console.log("an error happened");
    });
  }
  render() {
    var loginButton;
    var signup;
    if (this.props.loggedin) {
      loginButton = <button className="btn btn-default" onClick={this.signout}>Logout</button>;
      signup = "";
    } else {
      loginButton = <Link to="/login"><button className="btn btn-default">login</button></Link>;
      signup = <Link to="/signup"><button className="btn btn-default">Sign up</button></Link>;
    }
    return (
      <div className="Navbar">
        <Link to="/"><button className="btn btn-default">Home</button></Link>
        <Link to="/dashboard"><button className="btn btn-default dash-btn">Dashboard</button></Link>
        {loginButton}
        {signup}
        
      </div>
    );
  }
}

export default Navbar;
