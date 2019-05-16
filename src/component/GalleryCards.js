import React from 'react'
import { Card, Icon, Image} from 'semantic-ui-react'

const src = 'https://react.semantic-ui.com/images/wireframe/white-image.png'

const extra = (
  <a>
    <img id="GalleryCardAvatar" src="https://react.semantic-ui.com/images/avatar/small/molly.png" />
    M + 2 Friends
  </a>
)

const GalleryCards = () => (

  <Card.Group itemsPerRow={4}>
    <Card color='red' image={src} extra={extra} />
    <Card color='orange' image={src} extra={extra} />
    <Card color='yellow' image={src} extra={extra} />
    <Card color='olive' image={src} extra={extra} />
    <Card color='green' image={src} extra={extra} />
    <Card color='teal' image={src} extra={extra} />
    <Card color='blue' image={src} extra={extra} />
    <Card color='violet' image={src} extra={extra} />
    <Card color='purple' image={src} extra={extra} />
    <Card color='pink' image={src} extra={extra} />
    <Card color='brown' image={src} extra={extra} />
    <Card color='grey' image={src} extra={extra} />
  </Card.Group>
)

export default GalleryCards
