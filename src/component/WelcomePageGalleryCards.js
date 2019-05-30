import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { SET_CURRENT_ALBUM } from '../constants/ActionTypes'
import '../styles/GalleryCard.css'


class WelcomePageGalleryCards extends Component {

  state = {
    redirect: false
  }

  componentDidMount () {
    // const album_id = localStorage.getItem("album_id")
    //
    // if (album_id) {
    //   fetch('http://localhost:3000/api/current_album', {
    //     headers: {
    //       "Authorization": album_id
    //     }
    //   })
    //   .then(res => res.json() )
    //   .then( album => this.props.setCurrentAlbum(album) )
    // }
  }



  renderAlbumCard3 = () => {

    return this.props.albums.map( (album) => {
      return <section key={album.id} onClick={ () => this.handleAlbumClick(album) } className="galleryCard">
      <article className="card card--1">
        <div className="card__info-hover">
          <svg className="card__like"  viewBox="0 0 24 24">
            <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
          </svg>
          <div className="card__clock-info">
            <svg className="card__clock"  viewBox="0 0 20 20"><path d="M18.555,15.354V4.592c0-0.248-0.202-0.451-0.45-0.451H1.888c-0.248,0-0.451,0.203-0.451,0.451v10.808c0,0.559,0.751,0.451,0.451,0.451h16.217h0.005C18.793,15.851,18.478,14.814,18.555,15.354 M2.8,14.949l4.944-6.464l4.144,5.419c0.003,0.003,0.003,0.003,0.003,0.005l0.797,1.04H2.8z M13.822,14.949l-1.006-1.317l1.689-2.218l2.688,3.535H13.822z M17.654,14.064l-2.791-3.666c-0.181-0.237-0.535-0.237-0.716,0l-1.899,2.493l-4.146-5.42c-0.18-0.237-0.536-0.237-0.716,0l-5.047,6.598V5.042h15.316V14.064z M12.474,6.393c-0.869,0-1.577,0.707-1.577,1.576s0.708,1.576,1.577,1.576s1.577-0.707,1.577-1.576S13.343,6.393,12.474,6.393 M12.474,8.645c-0.371,0-0.676-0.304-0.676-0.676s0.305-0.676,0.676-0.676c0.372,0,0.676,0.304,0.676,0.676S12.846,8.645,12.474,8.645" />
            </svg><span className="card__time" >{album.images.length}</span>
          </div>
        </div>
      <div>
        <img
          className="card__img"
          alt="cardImage"
          src={album.images[0].image_url}
        />
      </div>

         <div>
         <img
           className="card__img--hover"
           alt=""
           src={album.images[0].image_url}
         />

         </div>

      <div className="card__info">
        <span className="card__category">{album.name}</span>
        <h3 className="card__title">Lorem ipsum dimsum</h3>
        <span className="card__by">by <a href="google.com" className="card__author" title="author">Richie + 2 friends</a></span>
      </div>
</article>

  </section>
    }
  )
  }


  handleAlbumClick = (album) => {

    this.props.setCurrentAlbum(album)
    localStorage.setItem("album_id", album.id)
    this.props.routeProps.push(`/album/${album.id}`)
    console.log("i am being clicked!", album)
  }


  render() {
    // console.log('in gallerycard, current props are', this.props)
    return(
        <div>
        <div className="albumCards2">
          {this.renderAlbumCard3()}
        </div>
        </div>
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


export default connect(mapStateToProps, mapDispatchToProps) (WelcomePageGalleryCards)
