import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const AlbumProfileCard = (props) => {
  if (!props.albumCreator) return null
  const { avatar, username, id } = props.albumCreator
  return (
    <Card id="AlbumProfileCard" fluid>
      <Image src={avatar} wrapped ui={false} />
      <Card.Content>
        <Link to ={`/profile/${id}`}>
          <Button
            id="AlbumCard"
          >
            View Profile
          </Button>
        </Link>
        <Card.Header id="AlbumCard" >{username}</Card.Header>
      </Card.Content>
      <Card.Content extra>

          <Icon name='user'  />
          24,225 Followers

      </Card.Content>
      <Card.Content extra>

          <Icon name='hand lizard' />
          2,312 Following

      </Card.Content>
      <Card.Content extra>

          <Icon name='camera retro' />
          22,222 Photos Uploaded

      </Card.Content>
    </Card>
  )
}

export default AlbumProfileCard
