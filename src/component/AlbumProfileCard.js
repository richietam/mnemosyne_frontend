import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const AlbumProfileCard = () => (
  <Card id="AlbumProfileCard" fluid>
    <Image src='http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d2d71aee66296d9acaa6e211be7314db4d773091/richietam3.png' wrapped ui={false} />
    <Card.Content>
      <Button
        id="AlbumCard"
      >
        View Profile
      </Button>
      <Card.Header id="AlbumCard" >Rich</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <a href="google.com" id="AlbumCard">
        <Icon name='user'  />
        24,225 Followers
      </a>
    </Card.Content>
    <Card.Content extra>
      <a href="google.com" id="AlbumCard">
        <Icon name='hand lizard' />
        2,312 Following
      </a>
    </Card.Content>
    <Card.Content extra>
      <a href="google.com" id="AlbumCard">
        <Icon name='camera retro' />
        22,222 Photos Uploaded
      </a>
    </Card.Content>
  </Card>
)

export default AlbumProfileCard
