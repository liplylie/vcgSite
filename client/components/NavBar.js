import React, { Component } from 'react'

import Logo from '../static/Kings LOGO-03.png'

class NavBar extends Component {
	constructor(){
		super()
	}

	render(){
		return(
			<div className="container" style={{letterSpacing: "2px"}}>
			<nav className="navbar navbar-fixed-top navbar-toggleable-md navbar-dark bg-faded" style={{marginTop: "3em", zIndex: 2}} >
				<div className="container-fluid">
					<div className="navbar-header">
					  <a className="navbar-brand"><img src={Logo} alt="D3C Kings" style={{height: "3em", width: "15em"}}/></a>
					</div>
		      <a className="nav-link" href="#" >ARCHITECTURE</a>
	        <a className="nav-link" href="#" >RESIDENCE</a>
	        <a className="nav-link" href="#" >FLOOR PLANS</a>
	        <a className="nav-link" href="#" >AMENITIES</a>
	        <a className="nav-link" href="#" >NEIGHBORHOOD</a>
	        <a className="nav-link" href="#" >OUR TEAM</a>
	        <a className="nav-link" href="#" >PRESS </a>
	        <a className="nav-link btn btn-outline-secondary" href="#">INQUIRE</a>
				</div>
			</nav>
			</div>
		)
	}
}

export default NavBar

