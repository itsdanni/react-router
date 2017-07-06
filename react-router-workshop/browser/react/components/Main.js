import React, { Component } from 'react';
import {
  HashRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import AllAlbums from './AllAlbums';
import AllArtists from './AllArtists';
// import NoMatch from './NoMatch';
import Player from './Player';
import Sidebar from './Sidebar';
import SingleAlbum from './SingleAlbum';
import SingleArtist from './SingleArtist';
import StatefulAlbums from './StatefulAlbums';

export const NoMatch = ({ location }) => (
  <div>
    <h3>Not found!</h3>
    <p>Sorry, there’s no page at <code>{location.pathname}</code>. Maybe try the <Link to={'/'}>home page</Link>?</p>
  </div>
)

export default class Main extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <HashRouter>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar deselectAlbum={this.deselectAlbum} />
          </div>

            <div className="col-xs-10">
            <Switch>
              <Route exact path='/' component={StatefulAlbums}></Route>
              <Route exact path='/albums' component={StatefulAlbums}></Route>
              <Route path='/albums/:albumId' component={SingleAlbum}></Route>
              <Route exact path='/artists' component={AllArtists}></Route>
              <Route path='/artists/:artistId' component={SingleArtist}></Route>
              <Route component={NoMatch}></Route>
            </Switch>
            </div>

          <Player />
        </div>
      </HashRouter>
    );
  }
}
