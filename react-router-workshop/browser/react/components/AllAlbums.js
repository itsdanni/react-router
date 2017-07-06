import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class AllAlbums extends Component {
  render () {
    const albums = this.props.albums;

    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
        {
          albums.map(album => (
            <div className="col-xs-4" key={ album.id }>
              <NavLink to={`/albums/${album.id}`} className="thumbnail" activeClassName="selected">
                <img src={ album.imageUrl } />
                <div className="caption">
                  <h5>
                    <span>{ album.name }</span>
                  </h5>
                  <small>{ album.songs.length } songs</small>
                </div>
              </NavLink>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}
