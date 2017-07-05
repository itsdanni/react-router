import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';
import AllAlbums from './AllAlbums';
import { Link } from 'react-router-dom';

export default class SingleArtist extends Component {
  constructor () {
    super();
    this.state = {
      artist: {},
      artistAlbums: [],
      artistSongs: []
    }
  }

  componentDidMount () {
    Promise.all([
      axios.get(`/api/artists/${this.props.match.params.artistId}`),
      axios.get(`/api/artists/${this.props.match.params.artistId}/albums`),
      axios.get(`/api/artists/${this.props.match.params.artistId}/songs`)
      ])
    .then(res => {
      this.setState({ artist: res[0].data,
        artistAlbums: res[1].data,
        artistSongs: res[2].data
      })
    })
  }

  render(){
    const artist = this.state.artist;
    const albums = this.state.artistAlbums;
    const songs = this.state.artistSongs;

    return (
    <div>
      <h3>{ artist.name }</h3>
      <ul className="nav nav-tabs">
        <li><Link to="TODO">ALBUMS</Link></li>
        <li><Link to="TODO">SONGS</Link></li>
      </ul>

      {/* Routes will go here! */}
    </div>);
  }
}
