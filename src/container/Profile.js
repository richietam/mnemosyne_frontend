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
import { API_URL } from '../constants/ActionTypes'

class Profile extends Component {

  componentDidMount () {
    // console.log('in component did mount')
    const SelectedUserID = this.props.match.params.user_id
      fetch(`${API_URL}/auto_login`, {
        headers: {
          "Authorization": SelectedUserID
        }
      })
      .then(res => res.json())
      .then(response=> this.props.setSelectedUser(response))
  }

  shouldComponentUpdate (nextProps) {
    // console.log('in shoudlcomponentupdate', nextProps.match.params.user_id, this.props.match.params.user_id)
    if (nextProps.match.params.user_id !== this.props.match.params.user_id) {
    const SelectedUserID = nextProps.match.params.user_id
      fetch(`${API_URL}/auto_login`, {
        headers: {
          "Authorization": SelectedUserID
        }
      })
      .then(res => res.json())
      .then(response=> this.props.setSelectedUser(response))
    }
    return true
  }

  handleFollow = (currentUser, selectedUser) => {
    fetch(`${API_URL}/follow`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: currentUser,
        followed_user_id: selectedUser
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response=> {
      if (response.error) {
        alert("u alredy fullowin dis")
      } else {
        console.log('follow', response)
        this.props.setCurrentUser(response)
      }
    })
  }

  handleUnfollow = (currentUser, selectedUser) => {
    fetch(`${API_URL}/follow`, {
      method: 'DELETE',
      body: JSON.stringify({
        user_id: currentUser,
        followed_user_id: selectedUser
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response=> {
      console.log('unfollow', response)
      this.props.setCurrentUser(response)
    })
  }

   checkFollowStatus = (currentUser, selectedUser) => {
    //user is on their own profile page, follow/unfollow button will not render
    if (!this.props.current_user) return null

    const currentUser_followed_ids = this.props.current_user.followed_users.map(user => user.id)

    if( currentUser_followed_ids.includes(this.props.selected_user.id)) {
      return this.handleUnfollow(currentUser, selectedUser)
    } else {
      return this.handleFollow(currentUser, selectedUser)
    }
  }

   profileCardButtonText = () => {
    //user is on their own profile page, follow/unfollow button will not render
    if (!this.props.current_user) return null

    const currentUser_followed_ids = this.props.current_user.followed_users.map(user => user.id)

    if( currentUser_followed_ids.includes(this.props.selected_user.id)) {
      return "Unfollow"
    } else {
      return "Follow"
    }
  }

  render () {
    console.log(this.props)
    if (!this.props.current_user && !this.props.selected_user) return null

    const { avatar, username, first_name, last_name, id, followings, followers, photosUploaded } = this.props.selected_user

    return (

      <div id="profile">
      <Grid>
        <Grid.Column width={16}>
          <ProfileMainImage
            className=""
            username={username.charAt(0).toUpperCase() + username.slice(1)}
            first_name={first_name.charAt(0).toUpperCase() + first_name.slice(1)}
            last_name={last_name.charAt(0).toUpperCase() + last_name.slice(1)}
            currentUser={this.props.currentUser}
          />
        </Grid.Column>
      </Grid>

      <Grid>
        <Grid.Column width={5}>
          <ProfileCard
            avatar={avatar}
            username={username.charAt(0).toUpperCase() + username.slice(1)}
            selectedUserID={id}
            currentUser={this.props.current_user.id}
            selectedUser={id}
            handleFollow={this.checkFollowStatus}
            buttonText={this.profileCardButtonText()}
            followings={followings}
            followers={followers}
            photosUploaded={photosUploaded}
          />
        </Grid.Column>

        <Grid.Column
          width={11}
          id="RedBorder"
        >
          <NewsFeed
            newsFeed={this.props.selected_user.newsFeed}
            currentUser={this.props.current_user.id}
            selectedUser={id}
            followed_users={this.props.current_user.followed_users}
          />

        </Grid.Column>
      </Grid>

      <Grid>
        <Grid.Column
          width={16}
          id="GalleryCardsGrid"
        >
          <div
            className="ui divider"
            id="Divider">
          </div>
          <Header as='h2'>{first_name.charAt(0).toUpperCase() + first_name.slice(1) + "'s Albums:"}</Header>
          {
            this.props.current_user.id === id ?
              <div id="NewGalleryButton">
              <Link to ='/newalbum'>
              <Button id="Button" >
                <Button.Content visible>+ New Gallery</Button.Content>
              </Button>
              </Link>
              </div>
            :
              null
          }
          <GalleryCards
            handleAlbumClick={this.handleAlbumClick}
            albums={this.props.selected_user.albums}
            selected_user={this.props.selected_user}
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
