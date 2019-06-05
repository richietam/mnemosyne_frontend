import React, { Component } from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import WelcomeLeft from '../component/WelcomeLeft'
import WelcomeRight from '../component/WelcomeRight'
import { connect } from 'react-redux'
import WelcomePageGalleryCards from '../component/WelcomePageGalleryCards'

class Welcome extends Component {

  render () {
    if(!this.props.albums) return null
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
        <WelcomePageGalleryCards
          albums={this.props.albums.albums}
        />
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
