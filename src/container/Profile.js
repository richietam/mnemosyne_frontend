import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Image, Header, Button } from 'semantic-ui-react'
import ProfileMainImage from '../component/ProfileMainImage'
import NewsFeed from '../component/NewsFeed'
import ProfileCard from '../component/ProfileCard'
import GalleryCards from '../component/GalleryCards'

class Profile extends Component {
  render () {
    return (
      <div id="profile">
      <Grid>
        <Grid.Column width={16}>
          <ProfileMainImage />
        </Grid.Column>
      </Grid>


      <Grid>
        <Grid.Column width={5}>
          <ProfileCard/>
        </Grid.Column>

        <Grid.Column
          width={11}
          id="RedBorder"
        >
          <NewsFeed />

        </Grid.Column>
      </Grid>

      <Grid>
        <Grid.Column
          width={16}
          id="GalleryCardsGrid"
        >
          <Header as='h2'>Matthew's Galleries:</Header>
          <div id="NewGalleryButton">
            <Button>
              New Gallery
            </Button>
          </div>
          <GalleryCards/>
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
