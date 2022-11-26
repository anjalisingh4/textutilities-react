import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active"  href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/about">
                  {props.aboutText}
                </a> */}
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form> */}

                <div className="btn-group mx-2" role="group" aria-label="Basic radio toggle button group ">
                  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"/>
                  <label className="btn btn-outline-primary" htmlFor="btnradio1">Bluish</label>

                  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                  <label className="btn btn-outline-primary" htmlFor="btnradio2">Purple</label>

                  <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
                  <label className="btn btn-outline-primary" htmlFor="btnradio3">Greenish</label>
                </div>

                <div className={`form-check form-switch text-${props.mode === 'light'? 'dark': 'light'}`}>
                  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modebtn}</label>
                </div>
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : "Set Title Here",
    aboutText : "Set Text"
}