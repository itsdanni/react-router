import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <ul className='list-unstyled'>
            <li><NavLink to="/albums" activeClassName="selected">ALBUMS</NavLink></li>
            <li><NavLink to="/artists" activeClassName="selected">ARTISTS</NavLink></li>
          </ul>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
