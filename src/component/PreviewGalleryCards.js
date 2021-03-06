import React from 'react'
import { Card } from 'semantic-ui-react'

const src = 'https://react.semantic-ui.com/images/wireframe/image.png'

const PreviewGalleryCards = () => (
  <Card.Group itemsPerRow={6}>
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
  </Card.Group>
)

export default PreviewGalleryCards
