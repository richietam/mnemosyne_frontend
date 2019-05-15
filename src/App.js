import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewUserForm from './container/NewUserForm'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Nav from './component/Nav'


class App extends Component {

  componentDidMount () {
    fetch('http://localhost:3000/api/users')
      .then(res => res.json())
        .then( users => {
          this.props.setUsers(users)
        })
  }

  render () {
    return (
      <div>
        < Nav />
        < NewUserForm />
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
