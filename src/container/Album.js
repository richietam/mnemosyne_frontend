import React, { Component } from 'react'
import { Header, Grid, Card, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import AlbumProfileCard from '../component/AlbumProfileCard'
import { Link } from 'react-router-dom'
import { SET_CURRENT_ALBUM } from '../constants/ActionTypes'

class Album extends Component {

  renderGalleryImages = () => {
    return this.props.current_album.images.map( (img) => {
      return <Image
        src={img.image_url}
        fluid
        key={img.id}
      />
    })
  }

  componentDidMount () {
    const album_id = localStorage.getItem("album_id")

    if (album_id) {
      fetch('http://localhost:3000/api/current_album', {
        headers: {
          "Authorization": album_id
        }
      })
      .then(res => res.json() )
      .then( album => this.props.setCurrentAlbum(album) )
    }
  }

  render () {
    console.log(this.props)
    if (!this.props.current_album) return null
    return (
      <div>
        <Grid>
          <Grid.Column width={16} id="AlbumTop">
            <div id="MainAlbumImage">
              <img src={this.props.current_album.images[0].image_url} alt=""/>
            </div>
            <div id="MainAlbumH1">
            <Header size='huge' id="AlbumHeaderColor">LOREM IPSUM DIMSUM</Header>
            </div>
            <div id="MainAlbumH2">
            <Header size='huge' id="AlbumHeaderColor">LOREM IPSUM DIMSUM</Header>
            </div>
          </Grid.Column>
        </Grid>

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
          <Grid.Column id="Gallery" width={16}>
            <Link to ='/albumedit'>
              <Button id="editbutton" >
                <Button.Content visible>Edit Album</Button.Content>
              </Button>
            </Link>
            {this.renderGalleryImages()}
          </Grid.Column>
        </Grid>

        <Grid>
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

export default connect(mapStateToProps, mapDispatchToProps) (Album)
