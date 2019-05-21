import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { SET_CURRENT_ALBUM } from '../constants/ActionTypes'

const extra = (
  <div>
    <img
      alt= ""
      id="GalleryCardAvatar"
      src="https://react.semantic-ui.com/images/avatar/small/molly.png"
    />
    M + 2 Friends created Album Name
  </div>
)

class GalleryCards extends Component {

  state = {
    redirect: false
  }

  renderAlbumCard = () => {
    return this.props.current_user.albums.map( (album) => {
      return <Card
        color='orange'
        key={album.id}
        id={album.id}
        extra={extra}
        image={album.images[0]}
        onClick={ () => this.handleAlbumClick(album) }
        fluid
      />
    }
  )
  }

  handleAlbumClick = (album) => {
    this.props.setCurrentAlbum(album)
    this.setState({
      redirect: true
    })
    console.log("i am being clicked!", album)
  }


  render() {
    if (this.state.redirect) {
     return <Redirect to='/album'/>;
   }
    return(
      <Card.Group itemsPerRow={4}>
        {this.renderAlbumCard()}
      </Card.Group>
    )
  }
}

const mapStateToProps = ({ users: {current_user} } ) => ({ current_user })

function mapDispatchToProps (dispatch) {
  return {
    setCurrentAlbum: (album_id) => {
      dispatch({
        type: SET_CURRENT_ALBUM,
        payload: album_id
      })
    }
  }
}


// function mapStateToProps (state) {
//   return {
//     current_user: state.users.current_user,
//   }
// }


export default connect(mapStateToProps, mapDispatchToProps) (GalleryCards)
