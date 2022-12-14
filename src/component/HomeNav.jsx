import React from 'react'

export default function HomeNav() {
  return (
    <div>
       
<nav className="navbar navbar-expand-lg fixed-top bg-light navbar-light">
  <div className="container">
    <a className="navbar-brand" href="/"
      ><img
        id="MDB-logo"
        src="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
        alt="MDB Logo"
        draggable="false"
        height="70"
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
          <a className="nav-link mx-2" href="/even"><i className="fas fa-plus-circle pe-2"></i>Alumni</a>
        </li>
      <li className="nav-item">
          <a className="nav-link mx-2" href="/even"><i className="fas fa-plus-circle pe-2"></i>Events</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link mx-2" href="#!"><i className="fas fa-bell pe-2"></i>Learn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#!"><i className="fas fa-heart pe-2"></i>Support</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="/even"><i className="fas fa-plus-circle pe-2"></i>ProDevcom</a>
        </li>
        <li className="nav-item ms-3">
          <a className="btn btn-blue btn-rounded" href="/login">Login </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}
