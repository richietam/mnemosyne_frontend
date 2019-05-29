import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component {
  render() {
    if (!this.props.current_user) return null

    return (
    <div className="">
      <div className="navlinks" id="navlinks">
       <Link to='/home'>
         Home
       </Link>
       <Link to={`/profile/${this.props.current_user.id}`}>
       Profile
       </Link>

       <Link to='/newalbum'>
         New Album
       </Link>

       <Link to='/login'>
         Login
       </Link>

      </div>
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
