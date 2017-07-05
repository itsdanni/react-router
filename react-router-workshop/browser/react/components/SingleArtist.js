import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';

export default class SingleArtist extends Component {
  constructor() {
    super();
  }

  render(){
    return (
    <div>
      <h3>ARTIST NAME</h3>
      <h4>ALBUMS</h4>
      <h4>SONGS</h4>
    </div>);
  }
}
