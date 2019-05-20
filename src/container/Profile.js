import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import ProfileMainImage from '../component/ProfileMainImage'
import NewsFeed from '../component/NewsFeed'
import ProfileCard from '../component/ProfileCard'
import GalleryCards from '../component/GalleryCards'

class Profile extends Component {
  render () {
    console.log('in profile, currnet props are:', this.props)
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
          <Link to ='/newgallery'>
          <Button id="HomeButton" >
            <Button.Content visible>+ New Gallery</Button.Content>
          </Button>
          </Link>
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
    users: state.users,
    current_user: state.current_user
  }
}

export default connect(mapStateToProps) (Profile)
