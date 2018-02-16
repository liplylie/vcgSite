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

import footerLogo from '../static/KINGS LOGO-01.png'
import FBLogo from '../static/fblogo.png'
import TwitterLogo from '../static/TwitterLogo.png'
import InstaLogo from '../static/instaLogo.png'

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
					<Section>
						<img id="topPicture" src={KingsRoadHome1} style={imageStyle}/>
					</Section>
					<Section>
						<img id="Architecture" src={KingsRoadHome2} style={imageStyle}/>
						<div className="left-message"><p>ARCHITECTURE</p><button type="button" className="btn btn-outline-secondary btn-lg">LEARN MORE</button></div>
					</Section>
					<Section>
						<img id="Residence"src={KingsRoadUnit} style={imageStyle}/>
						<div className="right-message"><p>RESIDENCE</p><button type="button" className="btn btn-outline-secondary btn-lg">LEARN MORE</button></div>
					</Section>
					<Section>
						<img id="Amenities" src={KingsTreadmill} style={imageStyle}/>
						<div className="left-message"><p>AMENITIES</p><button type="button" className="btn btn-outline-secondary btn-lg">LEARN MORE</button></div>
					</Section>
					<Section>
						<img id="Neighborhood" src={Hollywood} style={imageStyle}/>
							<div className="topLeft-message"><p>NEIGHBORHOOD</p><button type="button" className="btn btn-outline-secondary btn-lg">Get Informed</button></div>
					</Section>
					<Section>
						<img id="Press" src={KingsRoadUnit2} style={imageStyle}/>
						<div className="left-message-cube-sides"></div><div className="left-message-cube"><p>URBANIZE</p><button type="button" className="btn btn-outline-secondary btn-lg">MORE</button></div>
						<div className="middle-message-cube"><p>LA CURBED</p><button type="button" className="btn btn-outline-secondary btn-lg">MORE</button></div>
						<div className="right-message-cube"><p>WEHOVILLE</p><button type="button" className="btn btn-outline-secondary btn-lg">MORE</button></div>
					</Section>
					<Section>
						<img id="Inquire" src={KingsShower} style={imageStyle}/>
						<div className="center-message"><p>INTERESTED IN OUR RESIDENCES?</p><button type="button" className="btn btn-outline-secondary btn-lg">INQUIRE</button></div> 
						<div className="footer"> 
							<div> 
								<img src={footerLogo} style={{height: "10vh", width: "30vh"}}/> 
							</div>
							<div>
								Copyright 2018 | 1030 Kings. All Rights Reserved | 1030 N Kings Rd, West Hollywood, Ca 90069 <img src={FBLogo} style={{height: "3em", width: "3em"}} /> <img src={TwitterLogo} style={{height: "2.5em", width: "2.5em"}} /> <img src={InstaLogo} style={{height: "3em", width: "3em"}}/> 
							</div>
						</div>
					</Section>
				</ScrollPage>
			</div>
		)
	}
}

export default Home