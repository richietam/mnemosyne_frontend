import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProfileMainImage from '../component/ProfileMainImage'
import ProfileCard from '../component/ProfileCard'
import { Grid, Image, Header } from 'semantic-ui-react'

class Profile extends Component {
  render () {
    return (
      <div id="profile">
        <ProfileMainImage />

      <Grid>
        <Grid.Column width={5}>
          <ProfileCard/> 
        </Grid.Column>

        <Grid.Column width={8}>

        </Grid.Column>

        <Grid.Column width={3}>
          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
        </Grid.Column>

      </Grid>
    </div>
    )
  }
}



function mapStateToProps (state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps) (Profile)
