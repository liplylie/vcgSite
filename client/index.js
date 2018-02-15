import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'

class VCGSite extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <App /> 
    )
  }
}

ReactDOM.render(<VCGSite/>, document.getElementById('app')) 

