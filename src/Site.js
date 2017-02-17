import React, { Component } from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import Content from './Content.js'

class Site extends Component {
  render(){
    return(
      <div className="Site">
        <Header />
        <Content display={this.props.children}/>
        <Footer />
      </div>
    )
  }
}

export default Site
