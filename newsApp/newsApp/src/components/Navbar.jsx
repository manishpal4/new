import React from 'react'

export const Navbar = ({SetCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><span>NewsMAN</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="nav-link" onClick={()=>SetCategory("technology")}>Technology</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={()=>SetCategory("business")}>Business</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={()=>SetCategory("health")} >Health</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={()=>SetCategory("sports")} >Sports</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" onClick={()=>SetCategory("entertainment")}>Entertainment</div>
          </li>
          
          
        </ul>
      </div>
    </div>
  </nav>
  )
}
