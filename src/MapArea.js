import React, {Component} from 'react'
import Iframe from 'react-iframe'

class MapArea extends Component {
  render() {
    return (
      <div className="MapArea Section">
        <Iframe
          url="https://www.google.com/maps/embed/v1/place?key=AIzaSyA2KTGx1PYkhQIzD4cZkXgzan11tzocYYI
            &q=Space+Needle,Seattle+WA"
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}

export default MapArea
