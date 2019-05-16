import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import WelcomeLeft from '../component/WelcomeLeft'
import WelcomeRight from '../component/WelcomeRight'

class Welcome extends Component {

  render () {
    return (
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <WelcomeLeft/>
          </Grid.Column>
          <Grid.Column>
            <WelcomeRight/>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    )
  }
}

export default Welcome
