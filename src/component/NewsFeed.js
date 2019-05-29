import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const NewsFeed = (props) => {
  console.log('in newsfeed', props)

  const renderEvents = () => {
    return props.newsFeed.map( event => {

      const avatar = props.followed_users.filter( user => {
        return user.id === event.user_id
      })

      if(event.activity_type ==="newAlbum"){
        return <Feed.Event
          key={event.id}
          id="feedEvent"
          >
          <Feed.Content>
            {/*<Feed.Date content='1 day ago' />*/}
            <Feed.Summary>
              <img id="newsFeedAvatar" alt="News Feed Avatar" src={avatar[0].avatar}/>
              <Link id="newsFeedLink" to={`/profile/${event.user_id}`}> {event.activity_owner_username}</Link> {""} created a new <Link id="newsFeedLink" to={`/album/${event.album_created_id}`}>album.</Link>
              <div className="ui divider" id="Divider"></div>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

      } else if(event.activity_type==="follow"){

        return <Feed.Event
            key={event.id}
            id="feedEvent"
          >
          <Feed.Content>
            {/*<Feed.Date content='1 day ago' />*/}
            <Feed.Summary>
              <img id="newsFeedAvatar" alt="News Feed Avatar" src={avatar[0].avatar}/> {""}
              <Link id="newsFeedLink" to={`/profile/${event.user_id}`}>{event.activity_owner_username}</Link> started following {""}
              <Link id="newsFeedLink" to={`/profile/${event.followed_user_id}`}>{event.followed_user_username}.</Link>
              <div
                className="ui divider"
                id="Divider">
              </div>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      } else {
        return null
      }
    })
  }

  return (
    <Card id="NewsFeedTable">
      <Card.Content>
        <Card.Header>Recent Activity</Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>
          {
            props.currentUser === props.selectedUser ?
              renderEvents()
            :
              "Public Newsfeed display feature to be implemented"
          }
        </Feed>
      </Card.Content>
    </Card>
  )
}
export default NewsFeed
