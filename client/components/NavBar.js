import React, { Component } from 'react'

import Logo from '../static/Kings LOGO-03.png'

class NavBar extends Component {
	constructor(){
		super()
	}

	render(){
		return(
			<div className="container">
			<nav className="navbar navbar-fixed-top navbar-toggleable-md navbar-dark bg-faded" style={{marginTop: "3em", zIndex: 2}} >
				<div className="container-fluid">
					<a className="navbar-brand" style={{textAlign: "left", marginLeft: "1em"}}><img src={Logo} alt="D3C Kings" style={{height: "3em", width: "10em", opacity: "1"}}/></a>
		      <a className="nav-link" href="#">ARCHITECTURE</a>
	        <a className="nav-link" href="#">RESIDENCE</a>
	        <a className="nav-link" href="#">FLOOR PLANS</a>
	        <a className="nav-link" href="#">AMENITIES</a>
	        <a className="nav-link" href="#">NEIGHBORHOOD</a>
	        <a className="nav-link" href="#">OUR TEAM</a>
	        <a className="nav-link" href="#">PRESS</a>
	        <a className="nav-link btn btn-outline-secondary" href="#">INQUIRE</a>

				</div>
			</nav>
			</div>
		)
	}
}

export default NavBar

