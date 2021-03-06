import React, { Component, Fragment } from 'react'
import { Button, Form, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { SET_CURRENT_USER } from '../constants/ActionTypes'
import { API_URL } from '../constants/ActionTypes'

class LoginForm extends Component {

  state = {
    username: "",
    password: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then( response => {
        if (response.errors) {
          alert(response.errors)
        } else {
          this.props.setCurrentUser(response)
          localStorage.setItem("user_id", response.id)
          this.props.history.push(`/profile/${response.id}`)
        }
    })


    // const current_user = this.findCurrentUser(this.state.username)

  }

  findCurrentUser = (name) => {
    return this.props.users.all_users.find( user => {
      return user.username.toLowerCase() === name.toLowerCase()
    })
  }

  render () {
    console.log(' in login form', this.props)
    if (this.state.redirect) {
     return <Redirect to='/profile'/>;
   }
    return (
      <Fragment>
        <Form id="form">
          <Header as='h2'>Login</Header>
          <Form.Field>
            <input
              id="inputField"
              placeholder='Username'
              onChange={this.handleChange}
              value={this.state.username}
              name="username"
            />

            <input
              id="inputField"
              type="password"
              placeholder='Password'
              onChange={this.handleChange}
              value={this.state.password}
              name="password"
            />
          </Form.Field>

          <Button
            type='submit'
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
      </Form>

      </Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    users: state.users
  }
}


function mapDispatchToprops (dispatch) {
  return {
    setCurrentUser: (user) => {
      dispatch({
        type: SET_CURRENT_USER,
        payload: user
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToprops) (LoginForm)
