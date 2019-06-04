import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const userID = localStorage.getItem("user_id")
class Nav extends Component {
  render() {
    if (!this.props.current_user) return null

    return (
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
         <Link className="navLinks" to='/login'>
           {userID ? `Logout` : `Login`}
         </Link>

      </div>

     )
  }
}

function mapStateToProps (state) {
  return {
    current_user: state.users.current_user,
  }
}


export default connect(mapStateToProps) (Nav)
