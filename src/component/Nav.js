import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { SET_CURRENT_USER } from '../constants/ActionTypes'

const userID = localStorage.getItem("user_id")

class Nav extends Component {

  handleLogOut = ()=> {
    localStorage.removeItem("user_id")
    this.props.setCurrentUser(null)
  }


  render() {
    return (
      <div>
        {
          this.props.current_user ?
          <div className="navBar" id="navlinks">
             <Link className="navLinks" to='/home'>
               Home
             </Link>
             <Link className="navLinks" to={`/profile/${this.props.current_user.id}`}>
             Profile
             </Link>

             <img className="logo" src="/logo_transparent.png"/>

             <Link className="navLinks" to='/newalbum'>
               New Album
             </Link>
             <Link
              className="navLinks" to='/logout' onClick={this.handleLogOut}>
              Logout
             </Link>
          </div>
          :
          <div className="navBar" id="navlinks">
             <Link className="navLinks" to='/home'>

             </Link>
             <Link className="navLinks" to='/home'>
               Home
             </Link>
             <img className="logo" src="/logo_transparent.png"/>

             <Link className="navLinks" to='/login'>
              Login
             </Link>
             <Link className="navLinks" to='/login'>

             </Link>
          </div>
        }


      </div>
     )
  }
}

function mapStateToProps (state) {
  return {
    current_user: state.users.current_user,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setCurrentUser: (user) => {
      dispatch({
        type: SET_CURRENT_USER,
        payload: user
      })
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps) (Nav)
