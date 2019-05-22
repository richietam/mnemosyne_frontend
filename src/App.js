import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import NewUserForm from './container/NewUserForm'
import LoginForm from './container/LoginForm'
import Nav from './component/Nav'
import Welcome from './container/Welcome'
import Profile from './container/Profile'
import AlbumForm from './container/AlbumForm'
import Album from './container/Album'
import AlbumEdit from './container/AlbumEdit'
import { SET_USERS } from './constants/ActionTypes'
import { SET_CURRENT_USER } from './constants/ActionTypes'

class App extends Component {

  componentDidMount () {
    fetch('http://localhost:3000/api/users/3')
      .then(res => res.json())
        .then( user => {
          this.props.setCurrentUser(user)
        })
  }

  render () {
    return (
      <div>
        < Nav changePage={this.changPage} />

        <Switch>
          <Route path='/newuser' render={() => <NewUserForm/>} />
          <Route path='/login' render={() => <LoginForm/>} />
          <Route path='/profile' render={() => <Profile/>} />
          <Route path='/newalbum' render={() => <AlbumForm/>} />
          <Route path='/album' render={routeProps => <Album {...routeProps}/>} />
          <Route path='/albumedit' render={() => <AlbumEdit/>} />
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
        type: SET_USERS,
        payload: users
      })
    },
    setCurrentUser: (user) => {
      dispatch({
        type: SET_CURRENT_USER,
        payload: user
      })
    }
  }
}

export default connect(null, mapDispatchToprops) (App);
