import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const ProfileCard = (props) => {
  console.log(props, parseInt(localStorage.getItem("user_id")) )
  const userID = parseInt(localStorage.getItem("user_id"))
return  <Card id="ProfileCard">
    <Image src={props.avatar} wrapped ui={false} />
    <Card.Content>
      {userID === props.id ? null : <Button
        id="ProfileCardButton"
      >
        {`Follow ${props.username}`}
      </Button>}
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
}

export default ProfileCard
