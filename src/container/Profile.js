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
    console.log('in profile', this.props)
    if (!this.props.current_user) return null
    const { image, username, bio, first_name, last_name } = this.props.current_user

    return (

      <div id="profile">
      <Grid>
        <Grid.Column width={16}>
          <ProfileMainImage
            username={username.charAt(0).toUpperCase() + username.slice(1)}
            first_name={first_name.charAt(0).toUpperCase() + first_name.slice(1)}
            last_name={last_name.charAt(0).toUpperCase() + last_name.slice(1)}
          />
        </Grid.Column>
      </Grid>

      <Grid>
        <Grid.Column width={5}>
          <ProfileCard
            avatar={image}
            username={username.charAt(0).toUpperCase() + username.slice(1)}
          />
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


const mapStateToProps = ({ users: {current_user} } ) => ({ current_user })

// function mapStateToProps (state) {
//   return {
//     current_user: state.users.current_user,
//   }
// }

export default connect(mapStateToProps) (Profile)
