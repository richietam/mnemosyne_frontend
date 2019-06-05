import React, { Component } from 'react'
import { Header, Grid, Card, Image, Button, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import { Redirect } from 'react-router'
import AlbumProfileCard from '../component/AlbumProfileCard'
// import AlbumGallery from './AlbumGallery'
import { Link } from 'react-router-dom'
import { SET_CURRENT_ALBUM } from '../constants/ActionTypes'
import { API_URL } from '../constants/ActionTypes'

const userID = localStorage.getItem("user_id")

class AlbumEdit extends Component {

  componentDidMount () {
    const album_id = localStorage.getItem("album_id")
    if (album_id) {
      fetch(`${API_URL}/current_album`, {
        headers: {
          "Authorization": album_id
        }
      })
      .then(res => res.json() )
      .then( album => this.props.setCurrentAlbum(album) )
    }
  }

  renderGalleryImages = () => {
    return this.props.current_album.images.map ( (img) => {
      return <div key={img.id}>
      <Image
        src={img.image_url}
        size='tiny'
        verticalAlign='top'
      />

      <Button
        id="editButton"
        onClick={ () => this.handleDeleteButton(img)}
      >
        <Button.Content visible>Delete Image</Button.Content>
      </Button>
      <Divider />
      </div>
    })
  }

  handleDeleteButton = (img) => {
    console.log("delete button is being clicked!", img.id )

    fetch(`${API_URL}/image`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({image_id: img.id})
    })
    .then(res => res.json())
    .then(album => this.props.setCurrentAlbum(album))
  }

  handleDeleteAlbum = (albumID) => {
    console.log("delete button is being clicked!", this.props.match.params.id)
    fetch(`${API_URL}/album`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({album_id: albumID})
    })
    .then(res => res.json())
    .then( res => {
      localStorage.removeItem("album_id")
      this.props.history.push(`/profile/${userID}`)
    })

  }


  render () {
    console.log('in album edit', this.props)
    if (!this.props.current_album) return null
    return (
      <div>
        <Grid id="Album2ndModule">
          <Grid.Column
            width={8}
            id="Red"
          >
            <Header size='huge' id="AlbumCardsGroup">Album Creators:</Header>
            <Card.Group itemsPerRow={3} id="AlbumCardsGroup">
            <AlbumProfileCard fluid/>
            <AlbumProfileCard  fluid/>
            <AlbumProfileCard fluid/>
            </Card.Group>

          </Grid.Column>
          <Grid.Column
            width={8}
            id="Blue"
          >
          <Header as='h3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Header>
          </Grid.Column>
        </Grid>

        <Grid>
          <Grid.Column id="GalleryCardsGrid" width={16}>
            <Link to ='/album'>
              <Button id="Button" >
                <Button.Content visible>Save Edits</Button.Content>
              </Button>
            </Link>
            <Button
              id="editButton"
              onClick={ () => this.handleDeleteAlbum(this.props.match.params.id)}
            >
              <Button.Content visible>Delete Album</Button.Content>
            </Button>
            {this.renderGalleryImages()}
          </Grid.Column>
        </Grid>

        <Grid >
          <Grid.Column id="Gallery" width={16}>

          </Grid.Column>
        </Grid>


      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setCurrentAlbum: (album_id) => {
      dispatch({
        type: SET_CURRENT_ALBUM,
        payload: album_id
      })
    }
  }
}

function mapStateToProps (state) {
  return {
    users: state.users,
    current_album: state.users.current_album
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AlbumEdit)
