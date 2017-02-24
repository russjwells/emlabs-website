import React, {Component} from 'react'
import Landing from './Landing.js'
import ContactForm from './ContactForm.js'
import MapArea from './MapArea.js'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Landing />
        <ContactForm />
        <MapArea />
      </div>
    );
  }
}

export default Home
