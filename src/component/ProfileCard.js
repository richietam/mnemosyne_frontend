import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'

const ProfileCard = (props) => {
  const userID = parseInt(localStorage.getItem("user_id"))

  const handleButtonClick = () => {
    props.handleFollow(props.currentUser, props.selectedUser)
    console.log('i am being clicked', props)
  }

  // console.log('in profile card', props)
  return  <Card id="ProfileCard">
    <img
      src={props.avatar}
      alt="ProfileCardAvatar"
      id="ProfileCardAvatar"
    />
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
        {`${props.followers.length} followers`}
      </a>
    </Card.Content>
    <Card.Content extra>
      <a href="google.com">
        <Icon name='hand lizard' />
        {`${props.followings.length} following`}
      </a>
    </Card.Content>
    <Card.Content extra>
      <a href="google.com">
        <Icon name='camera retro' />
        {`${props.photosUploaded} photos`}
      </a>
    </Card.Content>
  </Card>
}

export default ProfileCard
