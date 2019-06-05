import React, { Component } from 'react'
import { Header, Grid, Card, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import AlbumProfileCard from '../component/AlbumProfileCard'
import { Link } from 'react-router-dom'
import { SET_CURRENT_ALBUM } from '../constants/ActionTypes'
import { API_URL } from '../constants/ActionTypes'
import { Lightbox } from 'react-modal-image'

class Album extends Component {

  state = {
    open: false,
    lightboxUrl: null
  }

  renderGalleryImages = () => {
    return this.props.current_album.images.map( (img) => {
      return <Image
        src={img.image_url}
        key={img.id}
        id="test2"
      />
    })
  }

  renderGalleryImages2 = () => {
    return this.props.current_album.images.map( (img) => {
      return <img
        src={img.image_url}
        alt=""
        id=""
        onClick={ () => this.handleImageClick(img.image_url)}
        key={img.id}
      />
    })
  }

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

  handleImageClick = (url) => {
    this.setState({
      open: true,
      lightboxUrl: url
    })
    console.log("I was clicked", url )
  }

  closeLightbox = () => {
    this.setState({
      open: false
    })
  }

  render () {
    console.log('in album props are',this.props)
    if (!this.props.current_album) return null
    return (
      <div>
        <Grid>
          <Grid.Column width={16} id="AlbumTop">
            <div id="MainAlbumImage">
              <img src={this.props.current_album.images[0].image_url} alt=""/>
            </div>
            <div id="MainAlbumH1">
            <Header size='huge' id="AlbumHeaderColor">{this.props.current_album.name.toUpperCase()}</Header>
            </div>
            <div id="MainAlbumH2">
            <Header size='huge' id="AlbumHeaderColor">May 30th, 2019</Header>
            </div>
          </Grid.Column>
        </Grid>

        <Grid id="Album2ndModule">
          <Grid.Column
            width={10}
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
            width={6}
            id="albumRightContainer"
          >
          <Header as='h3' id="albumRightContainerText">
            Wonderful album description goes here. Lorem Ipsum Dimsum because I ran out of time to update this but I will revisit this code later on oh god are you still reading I am running out of things to say anyways hope you like this project pls hire me.
          </Header>
          </Grid.Column>

        </Grid>

        <Grid id="GalleryCardsGrid">
          <Grid.Column id="Gallery" width={16}>
          <div
            className="ui divider"
            id="Divider">
          </div>
            <Link to ={`/albumedit/${this.props.match.params.id}`}>
              <Button id="Button" >
                <Button.Content visible>Edit Album</Button.Content>
              </Button>
            </Link>

          </Grid.Column>
        </Grid>

        <Grid>
          <Grid.Column id="Gallery" width={16}>
          </Grid.Column>
        </Grid>

        <div id="photoGrid">
        {this.renderGalleryImages2()}
        </div>

        {
          this.state.open && (
            <Lightbox
              id="lightbox"
              large={this.state.lightboxUrl}
              onClose={this.closeLightbox}
              hideZoom={true}
              hideDownload={true}
            />
          )
        }
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
