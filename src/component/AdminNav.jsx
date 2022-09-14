import React from 'react'

export default function AdminNav() {
  return (
    <div>
  
<nav className="navbar navbar-expand-lg fixed-top bg-light navbar-light">
  <div className="container">
    <a className="navbar-brand" href="#"
      ><img
        id="MDB-logo"
        src="https://w7.pngwing.com/pngs/973/11/png-transparent-phoenix-logo-design-mark-phoenix-fire-thumbnail.png"
        alt="MDB Logo"
        draggable="false"
        height="30"
    /></a>
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto align-items-center">
        <li className="nav-item">
          <a className="nav-link mx-2" href="/Admin/dev"><i className="fas fa-plus-circle pe-2"></i>Query</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#!"><i className="fas fa-bell pe-2"></i>Developer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#!"><i className="fas fa-heart pe-2"></i>Updates</a>
        </li>
        <li className="nav-item ms-3">
          <a className="btn btn-black btn-rounded" href="#!">Sign in</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 
    </div>
  )
}
