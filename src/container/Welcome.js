import React, { Component } from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import WelcomeLeft from '../component/WelcomeLeft'
import WelcomeRight from '../component/WelcomeRight'
import { connect } from 'react-redux'

class Welcome extends Component {

  render () {

    console.log('in welcome component', this.props)
    return (
      <div>
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
        <Divider id="homedivider" />
        <div className="welcomeTextContainer">
          <span className="welcomeH2">
            Latest from our community:
          </span>
        </div>
        <div className="welcomePageContainer">
        <Divider id="homedivider" />
        </div>
        <div className="welcomeTextContainer">
          <span className="welcomeH2">
            Latest from your interests:
          </span>
        </div>
        <div className="welcomePageContainer">
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    albums: state.users.current_user
  }
}

export default connect(mapStateToProps) (Welcome)
