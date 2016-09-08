import React, { Component } from 'react';
import Note from './Note';

class Notelist extends Component {
  render() {
    var list = this.props.items.map( (item) => {
      return <Note key={item.key} item={item} />
    });
    return <div>{list.reverse()}</div>;
  }
}

export default Notelist;
