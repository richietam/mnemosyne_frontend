import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const ProfileCard = (props) => {
  const userID = parseInt(localStorage.getItem("user_id"))

  const handleButtonClick = () => {
    props.handleFollow(props.currentUser, props.selectedUser)
    console.log('i am being clicked', props)
  }

  console.log('in profile card', props)
  return  <Card id="ProfileCard">
    <Image src={props.avatar} wrapped ui={false} />
    <Card.Content>
      {userID === props.selectedUserID ? null :
      <Button
        id="ProfileCardButton"
        onClick={handleButtonClick}
      >
        {`${props.buttonText} ${props.username}`}
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
