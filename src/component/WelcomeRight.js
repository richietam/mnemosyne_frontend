import React, { Component } from 'react'
import { Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class WelcomeRight extends Component {
  render () {
    return (
      <div className="WelcomeRight">
        <Header size='huge' id="WelcomeRightH1">PROJECT MNEMOSYNE</Header>
        <p id="WelcomeRightP">
          Beautiful user created photo albums designed for friends, family, and strangers to curate their best photos online.
        </p>
        <Link to ='/newuser'>
        <Button id="HomeButton" >
          <Button.Content visible id="HomebuttonText">Sign up</Button.Content>
        </Button>
        </Link>
    </div>
    )
  }
}
export default WelcomeRight
