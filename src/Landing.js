import React, {Component} from 'react'
import landingbackround from './landingbackground.png'

class Landing extends Component {
  render() {
    var bgStyle = {
        backgroundImage: 'url(' + landingbackround + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    return (
      <div className="Landing Section" style={bgStyle}>
        <div className="Headline">EMLabs, Inc. is a transmission electron microscopy laboratory providing electron microscopy imaging services to hospitals, pathology groups, and medical/biological researchers.</div>
      </div>
    );
  }
}

export default Landing
