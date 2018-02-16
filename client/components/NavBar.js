import React, { Component } from 'react'

import Logo from '../static/Kings LOGO-03.png'

class NavBar extends Component {
	constructor(){
		super()
	}

	render(){
		return(
			<div className="container" style={{letterSpacing: "2px"}}>
			<nav className="navbar navbar-expand-lg" style={{marginTop: "3em", zIndex: 2}} role="navigation" >
				
				<button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
	          &#9776;
	      </button>
	      <div className="navbar-header">
				  <a className="navbar-brand"><img src={Logo} alt="D3C Kings" style={{height: "3em", width: "15em"}}/></a>
				</div>
	      <div className="collapse navbar-collapse" id="exCollapsingNavbar">
	        <ul className="nav navbar-nav">
	            <li className="nav-item"><a className="nav-link" style={{paddingRight: "2em"}} href="#" >ARCHITECTURE</a></li>
	            <li className="nav-item"><a className="nav-link" style={{paddingRight: "2em"}} href="#" >RESIDENCE</a></li>
	            <li className="nav-item"><a className="nav-link" style={{paddingRight: "2em"}} href="#" >FLOOR PLANS</a></li>
	            <li className="nav-item"><a className="nav-link" style={{paddingRight: "2em"}} href="#" >AMENITIES</a></li>
	            <li className="nav-item"><a className="nav-link" style={{paddingRight: "2em"}} href="#" >NEIGHBORHOOD</a></li>
	            <li className="nav-item"><a className="nav-link" style={{paddingRight: "2em"}} href="#" >OUR TEAM</a></li>
	            <li className="nav-item"><a className="nav-link" style={{paddingRight: "2em"}} href="#" >PRESS </a></li>
	            <li className="nav-item"><a className="nav-link btn btn-outline-secondary" href="#">INQUIRE</a></li>
	        </ul>
				</div>
			</nav>
				</div>
		)
	}
}

export default NavBar

