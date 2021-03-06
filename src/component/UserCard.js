import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = (props) => (

  <Card>
    <Image src={ props.users ? props.users.image : null } wrapped ui={false} />
    <Card.Content>
      <Card.Header>{ props.users ? props.users.username : null }</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
  
        <Icon name='user' />
        22 Friends

    </Card.Content>
  </Card>
)

export default CardExampleCard
