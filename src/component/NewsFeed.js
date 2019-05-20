import React from 'react'
import { Card, Feed } from 'semantic-ui-react'

const NewsFeed = () => (
    <Card id="NewsFeedTable">
      <Card.Content>
        <Card.Header>Recent Activity</Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
            <Feed.Content>
              <Feed.Date content='1 day ago' />
              <Feed.Summary>
                You added <a href="google.com">Jenny Hess</a> to your <a href="google.com">coworker</a> group.
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
            <Feed.Content>
              <Feed.Date content='3 days ago' />
              <Feed.Summary>
                You added <a href="google.com">Molly Malone</a> as a friend.
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
            <Feed.Content>
              <Feed.Date content='4 days ago' />
              <Feed.Summary>
                You added <a href="google.com">Elliot Baker</a> to your <a href="google.com">musicians</a> group.
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
            <Feed.Content>
              <Feed.Date content='4 days ago' />
              <Feed.Summary>
                You added <a href="google.com">Elliot Baker</a> to your <a href="google.com">musicians</a> group.
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
            <Feed.Content>
              <Feed.Date content='4 days ago' />
              <Feed.Summary>
                You added <a href="google.com">Elliot Baker</a> to your <a href="google.com">musicians</a> group.
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
            <Feed.Content>
              <Feed.Date content='4 days ago' />
              <Feed.Summary>
                You added <a href="google.com">Elliot Baker</a> to your <a href="google.com">musicians</a> group.
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>

        </Feed>
      </Card.Content>
    </Card>
)

export default NewsFeed
