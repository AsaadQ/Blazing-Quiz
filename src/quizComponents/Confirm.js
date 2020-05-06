

import React, { Component } from 'react'

class Confirm extends Component {
  render() {
    return (
      <div>
        {this.props.Comment && <p>Kommentar: {this.props.Comment}</p>}
      </div>
    )
  }
}

 
export default Confirm;