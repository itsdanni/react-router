import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';
import {
  Link,
  Route
} from 'react-router-dom';

export default class SingleAlbum extends Component {
  constructor() {
    super();
    this.state = {
      selectedAlbum: {}
    };
  }

  componentDidMount() {
    axios.get(`/api/albums/${this.props.match.params.albumId}`)
      .then(res => res.data)
      .then(album => this.setState({
        selectedAlbum: album
      }));
  }

  render () {
    const album = this.state.selectedAlbum;
    const mailto = `mailto:?subject=${album.name}&body=Check out this album: http://localhost:1337/#/albums/${album.id}`;

    return (
      <div className="album">
        <div>
          <h3>{ album.name } <a href={ mailto }><button type="button" className="btn btn-default btn-sm"><span className="glyphicon glyphicon-share"></span></button></a></h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs songs={album.songs} />
      </div>
    );
  }
}
