import React, { Component } from 'react'
import { Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class WelcomeRight extends Component {
  render () {
    return (
      <div className="WelcomeRight">
        <Header size='huge'>PROJECT MNEMOSYNE</Header>
        <p>
          Lucas ipsum dolor sit amet ben vader jinn ewok fett leia bothan kenobi secura wedge. Gonk ventress anakin mandalore bothan moff boba. Moff skywalker skywalker solo calamari jade mara. Ahsoka solo kamino solo biggs jabba fett. Gonk wampa skywalker calamari skywalker.
        </p>
        <Link to ='/newuser'>
        <Button id="HomeButton" >
          <Button.Content visible>Sign up</Button.Content>
        </Button>
        </Link>
    </div>
    )
  }
}
export default WelcomeRight
