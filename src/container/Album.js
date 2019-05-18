import React, { Component, Fragment } from 'react'
import { Button, Header, Grid, Card } from 'semantic-ui-react'
import Dropzone from 'react-dropzone'
import UserCard from '../component/UserCard'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import PreviewGalleryCards from '../component/PreviewGalleryCards'
import AlbumProfileCard from '../component/AlbumProfileCard'
import AlbumGallery from './AlbumGallery'

class AlbumForm extends Component {

  render () {
    return (
      <div>
        <Grid id="AlbumTop">
          <Grid.Column width={16}>
            <div id="MainAlbumImage">
            </div>
            <div id="MainAlbumH1">
            <Header size='huge'>LOREM IPSUM DIMSUM</Header>
            </div>
            <div id="MainAlbumH2">
            <Header size='huge'>LOREM IPSUM DIMSUM</Header>
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

        <Grid id="AlbumTop">
          <Grid.Column id="Gallery" width={16}>
            <AlbumGallery/>
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

export default connect(mapStateToProps) (AlbumForm)
