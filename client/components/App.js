import React, { Component } from 'react'
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom'

import NavBar from './NavBar'
import Home from './Home'

class App extends Component {
	constructor(){
		super()
	}

	render(){
		return(
			 <BrowserRouter>
        <div className="main">  
          <NavBar />
          <div>
  	         <Switch>
              <Route exact path='/' component={() => ( <Home />)}/>
              <Route render={() => {
                return (
                  <div className="row" style={{backgroundColor: 'lightpink', height: '100vh', minWidth: '100vw', flex:1}}>
                    <div className="col align-self-center">
                      <div style={{textAlign: 'center'}}>
                        <h1>Error 404 Page Not Found</h1>
                      </div>
                    </div>
                  </div>
                  )}}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
		)
	}
}

export default App