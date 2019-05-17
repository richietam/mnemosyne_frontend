import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { Segment } from 'semantic-ui-react'

class Nav extends Component {

  render() {
    return (
    <div className="navBar">
      <div className="navlinks" id="navlinks">
       <Link to='/home'>
         Home
       </Link>

       <Link to='/newuser'>
         New User
       </Link>

       <Link to='/newalbum'>
         New Album
       </Link>

       <Link to='/profile'>
         Profile
       </Link>

       <Link to='/album'>
         Album
       </Link>

      </div>
    </div>
     )
  }
}

export default Nav
