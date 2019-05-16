import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import NewUserForm from './container/NewUserForm'
import Nav from './component/Nav'
import Welcome from './container/Welcome'
import Profile from './container/Profile'
import GalleryForm from './container/GalleryForm'

class App extends Component {

  componentDidMount () {
    fetch('http://localhost:3000/api/users')
      .then(res => res.json())
        .then( users => {
          console.log('app response users are ', users)
          this.props.setUsers(users)
        })
  }

  render () {
    return (
      <div>
        < Nav changePage={this.changPage} />

        <Switch>
          <Route path='/newuser' render={() => <NewUserForm/>} />
          <Route path='/login' render={() => <NewUserForm/>} />
          <Route path='/profile' render={() => <Profile/>} />
          <Route path='/newgallery' render={() => <GalleryForm/>} />
          <Route exact path='/' component={ Welcome } />
          <Route component={ Welcome } />
        </Switch>

      </div>
    );
  }
}

function mapDispatchToprops (dispatch) {
  return {
    setUsers: (users) => {
      dispatch({
        type: "SET_USERS",
        payload: users
      })
    }
  }
}

export default connect(null, mapDispatchToprops) (App);
