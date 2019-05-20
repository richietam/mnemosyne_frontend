import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const ProfileCard = () => (
  <Card id="ProfileCard">
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Button
        id="ProfileCardButton"
      >
        Follow Matthew
      </Button>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        I like turtles.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="google.com">
        <Icon name='user' />
        24,225 Followers
      </a>
    </Card.Content>
    <Card.Content extra>
      <a href="google.com">
        <Icon name='hand lizard' />
        2,312 Following
      </a>
    </Card.Content>
    <Card.Content extra>
      <a href="google.com">
        <Icon name='camera retro' />
        22,222 Photos Uploaded
      </a>
    </Card.Content>
  </Card>
)

export default ProfileCard
