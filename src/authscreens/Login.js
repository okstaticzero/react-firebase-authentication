import React, { Component } from 'react';
import { Link } from 'react-router';
import * as firebase from 'firebase';
import firebaseApp from '../firebase/Firebase';
import isEmail from 'validator/lib/isEmail';

class Login extends Component {
	constructor(props) {
    	super(props);
    	this.state = {email: "", password:""};
    	//
    	this.handleEmailChange = this.handleEmailChange.bind(this)
    	this.handlePassChange = this.handlePassChange.bind(this)
    	this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
   handlePassChange(e) {
    this.setState({password: e.target.value});
  }
	handleSubmit(e) {
	    e.preventDefault();
	    var email = this.state.email.trim();
	    var password = this.state.password.trim();
      if(isEmail(email)){
  	    firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    		  // Handle Errors here.
    		  var errorMessage = error.message;
    		  alert("errorMessage: "+ errorMessage)
    		});
      }else{
        alert("Email Address in not valid");
      }
  }
  handleFacebook(e) {
    e.preventDefault();
    var provider = new firebase.auth.FacebookAuthProvider();
    firebaseApp.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // var token = result.credential.accessToken;
      // The signed-in user info.
      //var user = result.user;
      console.log('Facebook login success')
    }).catch(function(error) {
      var errorMessage = error.message;
      alert("Facebook sign in error: "+ errorMessage);
    });
  }
   handleGoogle(e) {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebaseApp.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //var token = result.credential.accessToken;
      // The signed-in user info.
      //var user = result.user;
      console.log('Google login success')
    }).catch(function(error) {
      var errorMessage = error.message;
      alert("Google sign in error: "+ errorMessage);
    });
  }
  render() {
    return (
      <div className="Login">
        <h1>Login Screen</h1>
        <div className="col-md-4"></div>
           <div className="form-group col-md-4">
            <a className="btn btn-block btn-social btn-facebook" onClick={this.handleFacebook}>
              <span className="fa fa-facebook"></span>
              Sign in with Facebook
            </a>
            <a className="btn btn-block btn-social btn-google" onClick={this.handleGoogle}>
              <span className="fa fa-google"></span>
              Sign in with Google
            </a>
          <br/>
          <p className="text-center">------------- Or -------------</p>
          <form onSubmit={this.handleSubmit}>
          	<input type="text" className="form-control" value={this.state.email} onChange={this.handleEmailChange} placeholder="Enter Email" />
          	<input type="password" className="form-control" value={this.state.password} onChange={this.handlePassChange} placeholder="Enter Password" /><br/>
          	<button type="submit" className="btn btn-default">Submit</button>
          </form>  
        	<br/><br/>
        	<p>Forgot Password? <Link to="/recover"> Click Here</Link></p>
          <p>Not SIgned up yet? <Link to="/signup"> Sign Up</Link></p>
        </div>
      </div>
    );
  }
}

export default Login;
