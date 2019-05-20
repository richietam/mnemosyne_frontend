import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const ProfileCard = (props) => (
  <Card id="ProfileCard">
    <Image src={props.avatar} wrapped ui={false} />
    <Card.Content>
      <Button
        id="ProfileCardButton"
      >
        {`Follow ${props.username}`}
      </Button>
      <Card.Header>{props.username}</Card.Header>
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
