import React from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div>
      <Link to="/client/add" className="btn btn-success btn-block">
        New
      </Link>
    </div>
  )
}

export default SideBar;
