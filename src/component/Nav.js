import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

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

       <Link to='/newgallery'>
         New Gallery
       </Link>
      </div>
    </div>
     )
  }
}

export default Nav
