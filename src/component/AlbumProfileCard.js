import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const AlbumProfileCard = () => (
  <Card id="AlbumProfileCard" fluid>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Button
        id="AlbumCard"
      >
        View Profile
      </Button>
      <Card.Header id="AlbumCard" >Matthew</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <a id="AlbumCard">
        <Icon name='user'  />
        24,225 Followers
      </a>
    </Card.Content>
    <Card.Content extra>
      <a id="AlbumCard">
        <Icon name='hand lizard' />
        2,312 Following
      </a>
    </Card.Content>
    <Card.Content extra>
      <a id="AlbumCard">
        <Icon name='camera retro' />
        22,222 Photos Uploaded
      </a>
    </Card.Content>
  </Card>
)

export default AlbumProfileCard
