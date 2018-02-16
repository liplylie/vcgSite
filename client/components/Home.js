import React, { Component } from 'react'
import { ScrollPage, Section } from 'react-scrollpage';

import Hollywood from '../static/Hollywood_copy.jpg'
import KingsRoadCam from '../static/KingsRoadCam.jpg'
import KingsRoadUnit from '../static/KingsRoadUnit.jpg'
import KingsRoadUnit2 from '../static/KingUnit2.jpg'
import KingsRoadHome1 from '../static/KingsRoadHome1.jpg'
import KingsRoadHome2 from '../static/KingsRoadHome2.jpg'
import KingsTreadmill from '../static/KingTreadmill.jpeg'
import KingsShower from '../static/KingShower.jpg'

class Home extends Component {
	constructor(){
		super()
	}

	render(){
		const imageStyle = {height: "100vh", width: "100vw"}
		const options = {
			curPage: 1,        
			totalPage: 7,         
			delay: 1000           
		}

		return(
			<div id="HomeDiv">
			<ScrollPage {...options}>
				<Section><img id="topPicture" src={KingsRoadHome1} style={imageStyle}/></Section>
				<Section><img id="Architecture" src={KingsRoadHome2} style={imageStyle}/><div className="architecture-message"><p>Architecture</p><button type="button" className="btn btn-outline-secondary btn-lg">Learn More</button></div></Section>
				<Section><img id="Residence"src={KingsRoadUnit} style={imageStyle}/></Section>
				<Section><img id="Amenities" src={KingsTreadmill} style={imageStyle}/></Section>
				<Section><img id="Neighborhood" src={Hollywood} style={imageStyle}/></Section>
				<Section><img id="Press" src={KingsRoadUnit2} style={imageStyle}/></Section>
				<Section><img id="Inquire" src={KingsShower} style={imageStyle}/></Section>
				</ScrollPage>
			</div>
		)
	}
}

export default Home