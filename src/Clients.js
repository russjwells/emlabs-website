import React, {Component} from 'react'
import clientsheader from './clientsheader.png'
import client1 from './client1.png'
import client2 from './client2.png'
import client3 from './client3.png'

class Clients extends Component {
  render() {
    var bgStyle = {
        backgroundImage: 'url(' + clientsheader + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };
    var client1imgbg = {
        backgroundImage: 'url(' + client1 + ')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };
    var client2imgbg = {
        backgroundImage: 'url(' + client2 + ')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };
    var client3imgbg = {
        backgroundImage: 'url(' + client3 + ')',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };
    return (
      <div className="Clients Section">
        <div className="ClientsHeaderPic" style={bgStyle}> </div>
        <div className="ClientsDescription">
          <p>Our valued clients include the University of Alabama Birmingham Hospital Department of Pathology, UAB Hospital Nerve and Muscle Histology Lab, UAB Department of Nephrology, Children’s of Alabama Department of Pathology/Laboratory Medicine, Dell’Italia UAB Center for Heart Failure Research, Baptist Health System in Birmingham, AL, and Veteran’s Administration Hospital, Birmingham, AL.</p>
        </div>
        <div className="ClientsImages">
          <div className="client1" style={client1imgbg}></div>
          <div className="client2" style={client2imgbg}></div>
          <div className="client3" style={client3imgbg}></div>
        </div>
      </div>
    );
  }
}

export default Clients
