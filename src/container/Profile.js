import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import ProfileMainImage from '../component/ProfileMainImage'
import NewsFeed from '../component/NewsFeed'
import ProfileCard from '../component/ProfileCard'
import GalleryCards from '../component/GalleryCards'
import { SET_CURRENT_USER } from '../constants/ActionTypes'
import { SET_SELECTED_USER } from '../constants/ActionTypes'

class Profile extends Component {

  componentDidMount () {
    console.log('in component did mount')
    const SelectedUserID = this.props.match.params.user_id
      fetch('http://localhost:3000/api/auto_login', {
        headers: {
          "Authorization": SelectedUserID
        }
      })
      .then(res => res.json())
      .then(response=> this.props.setSelectedUser(response))
  }

  shouldComponentUpdate (nextProps) {
    console.log('in shoudlcomponentupdate', nextProps.match.params.user_id, this.props.match.params.user_id)
    if (nextProps.match.params.user_id !== this.props.match.params.user_id) {
    const SelectedUserID = nextProps.match.params.user_id
      fetch('http://localhost:3000/api/auto_login', {
        headers: {
          "Authorization": SelectedUserID
        }
      })
      .then(res => res.json())
      .then(response=> this.props.setSelectedUser(response))
    }
    return true
  }

  render () {
    console.log(this.props)
    if (!this.props.current_user || !this.props.selected_user) return null
    const { avatar, username, first_name, last_name, id } = this.props.selected_user

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
            avatar={avatar}
            username={username.charAt(0).toUpperCase() + username.slice(1)}
            id={id}
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
          <Header as='h2'>{first_name.charAt(0).toUpperCase() + first_name.slice(1) + "'s Albums:"}</Header>
          <div id="NewGalleryButton">
          <Link to ='/newalbum'>
          <Button id="HomeButton" >
            <Button.Content visible>+ New Gallery</Button.Content>
          </Button>
          </Link>
          </div>
          <GalleryCards
            handleAlbumClick={this.handleAlbumClick}
            albums={this.props.selected_user.albums}
            routeProps={this.props.history}
          />
        </Grid.Column>

      </Grid>
    </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setCurrentUser: (user) => {
      dispatch({
        type: SET_CURRENT_USER,
        payload: user
      })
    },
    setSelectedUser: (user) => {
      dispatch({
        type: SET_SELECTED_USER,
        payload: user
      })
    }
  }
}

// const mapStateToProps = ({ users: {current_user} } ) => ({ current_user })

function mapStateToProps (state) {
  return {
    current_user: state.users.current_user,
    selected_user: state.users.selected_user,
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Profile)
