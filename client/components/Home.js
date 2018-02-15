import React, { Component } from 'react'
import { ScrollPage, Section } from 'react-scrollpage';

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
		const imageStyle = {height: "100vh", width: "100vw"}
			const options = {
				curPage: 1,        
				totalPage: 5,         
				delay: 1200           
			}

		return(
			<div id="HomeDiv">
			<ScrollPage {...options}>
				<Section><img src={KingsRoadHome1} style={imageStyle}/></Section>
				<Section><img src={KingsRoadHome2} style={imageStyle}/></Section>
				<Section><img src={Hollywood} style={imageStyle}/></Section>
				<Section><img src={KingsRoadUnit} style={imageStyle}/></Section>
				<Section><img src={KingsRoadCam} style={imageStyle}/></Section>
				</ScrollPage>
			</div>
		)
	}
}

export default Home