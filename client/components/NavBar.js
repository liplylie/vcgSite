import React, { Component } from 'react'

import Logo from '../static/Kings LOGO-03.png'

class NavBar extends Component {
	constructor(){
		super()
	}

	render(){
		return(
			<nav className="navbar navbar-toggleable-md navbar-dark">
				<div className="container-fluid">
					<button className="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					  <span className="navbar-toggler-icon "></span>
					</button>
					<a className="navbar-brand" style={{textAlign: "left", marginLeft: "1em"}}><img src={Logo} style={{height: "3em", width: "10em"}}/></a>
					<div className="collapse navbar-collapse" id="navbarNav">
					  <ul className="navbar-nav">
					    <li className="nav-item active">
					      <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
					    </li>
					    <li className="nav-item">
					      <a className="nav-link" href="#">Features</a>
					    </li>
					    <li className="nav-item">
					      <a className="nav-link" href="#">Pricing</a>
					    </li>
					    <li className="nav-item">
					      <a className="nav-link disabled" href="#">Disabled</a>
					    </li>
					  </ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default NavBar

