import React, { Component } from 'react';
import firebaseApp from './firebase/Firebase';

class Note extends Component {
	constructor(props) {
		super(props)
		this.deleteNote = this.deleteNote.bind(this)
	}
	deleteNote(){
		var user = firebaseApp.auth().currentUser;
		firebaseApp.database().ref('users/' + user.uid+"/notes/"+this.props.item.key).remove();
	}
  	render() {
      	return <div className="note" key={this.props.item.key}>{this.props.item.note} <button className="btn btn-default btn-xs" onClick={this.deleteNote}>delete</button></div>;
  	}
}

export default Note;
