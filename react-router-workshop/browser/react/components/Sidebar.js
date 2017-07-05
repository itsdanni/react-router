import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <ul className='list-unstyled'>
            <li><Link to="/albums">ALBUMS</Link></li>
            <li><Link to="/artists">ARTISTS</Link></li>
          </ul>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
