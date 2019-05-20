import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'

const src = 'https://react.semantic-ui.com/images/wireframe/white-image.png'

const extra = (
  <a href="google.com">
    <img
      alt= ""
      id="GalleryCardAvatar"
      src="https://react.semantic-ui.com/images/avatar/small/molly.png"
    />
    M + 2 Friends
  </a>
)

class GalleryCards extends Component {

  renderAlbumCard = () => {
    return this.props.current_user.albums.map( (album) => {
      return <Card color='orange' key={album.id} image={album.images[0]} extra={extra} fluid />
    }
  )
  }

  render() {
    console.log('inGalleryCards', this.props.current_user)
    return(
      <Card.Group itemsPerRow={4}>
        {this.renderAlbumCard()}
        <Card color='red' onClick={null} image={src} extra={extra} />
        <Card color='orange' image={"https://react.semantic-ui.com/images/avatar/small/molly.png"} extra={extra} />
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
  }
}

const mapStateToProps = ({ users: {current_user} } ) => ({ current_user })

// function mapStateToProps (state) {
//   return {
//     current_user: state.users.current_user,
//   }
// }


export default connect(mapStateToProps) (GalleryCards)
