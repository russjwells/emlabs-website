import React, {Component} from 'react'
import contactbackround from './contactbackground.png'

class ContactForm extends Component {
  render() {
    var bgStyle = {
        backgroundImage: 'url(' + contactbackround + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    return (
      <div className="ContactForm Section" style={bgStyle}>
        <div className="Form">
          <form>
            <h2>Interested in our Electron Microscopy services?</h2>
            <p>Your Name:</p><input type="text"/>
            <p>Your Email:</p><input type="text"/>
            <p>Phone Number:</p><input type="text"/>
            <p>Your Message:</p><textarea></textarea>
            <br/>
            <input type="submit" value="Send"/>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm
