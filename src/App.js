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

    const userID = localStorage.getItem("user_id")

    if(userID){
      fetch(`${API_URL}/auto_login`, {
        headers: {
          "Authorization": userID
        }
      })
      .then(res => res.json())
      .then(response=> this.props.setCurrentUser(response))
    }
  }

  render () {
    return (
      <div>
        < Nav changePage={this.changPage} />

        <Switch>
          <Route path='/newuser' render={(routeProps) => <NewUserForm {...routeProps}/>} />
          <Route path='/login' render={(routeProps) => <LoginForm {...routeProps}/>} />
          <Route path='/profile/:user_id' render={(routeProps) => <Profile {...routeProps}/>} />
          <Route path='/newalbum' render={(routeProps) => <AlbumForm {...routeProps}/>} />
          <Route path='/album/:id' render={routeProps => <Album {...routeProps} {...routeProps}/>} />
          <Route path='/albumedit/:id' render={(routeProps) => <AlbumEdit {...routeProps}/>} />
          <Route exact path='/' component={ Welcome } />
          <Route component={ Welcome } />
        </Switch>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
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

export default connect(null, mapDispatchToProps) (App);
