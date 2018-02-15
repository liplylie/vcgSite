import React, { Component } from 'react'

import Hollywood from '../static/Hollywood_copy.jpg'
import KingsRoadCam from '../static/KingsRoadCam.jpg'
import KingsRoadUnit from '../static/KingsRoadUnit.jpg'
import KingsRoadHome1 from '../static/KingsRoadHome1.jpg'
import KingsRoadHome2 from '../static/KingsRoadHome2.jpg'

class Home extends Component {
	constructor(){
		super()
	}

	render(){
		let imageStyle = {height: "100vh", width: "100vw"}
		return(
			<div id="HomeDiv">
				<img src={KingsRoadHome1} style={imageStyle}/>
				<img src={KingsRoadHome2} style={imageStyle}/>
				<img src={Hollywood} style={imageStyle}/>
				<img src={KingsRoadUnit} style={imageStyle}/>
				<img src={KingsRoadCam} style={imageStyle}/>
			</div>
		)
	}
}

export default Home