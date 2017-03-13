import React, {Component} from 'react'
import Equipment from './Equipment.js'
import Services from './Services.js'
import Cases from './Cases.js'
import Results from './Cases.js'

class Lab extends Component {
  render() {
    return (
      <div className="Lab">
        <Equipment />
        <Services />
        <Cases />
        <Results />
      </div>
    );
  }
}

export default Lab
