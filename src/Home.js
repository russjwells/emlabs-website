import React, {Component} from 'react'
import Landing from './Landing.js'
import Testimonial from './Testimonial.js'
import Introduction from './Introduction.js'
import ContactForm from './ContactForm.js'
import MapArea from './MapArea.js'

class Home extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Testimonial />
        <Introduction />
        <ContactForm />
        <MapArea />
      </div>
    );
  }
}

export default Home
