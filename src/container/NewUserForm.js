import React, { Component, Fragment } from 'react'
import { Button, Checkbox, Form, Icon, Header } from 'semantic-ui-react'
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux'
import { SET_CURRENT_USER } from '../constants/ActionTypes'
import { API_URL } from '../constants/ActionTypes'


class NewUserForm extends Component {

  state = {
    username: "",
    first_name: "",
    last_name: "",
    password:"",
    file: null,
    redirect: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    if (this.state.file === null){
      alert("Please add an avatar")
    }

    if (this.state.file !== null && this.state.username) {
    let formData = new FormData()
    formData.append('username', this.state.username)
    formData.append('first_name', this.state.first_name)
    formData.append('last_name', this.state.last_name)
    formData.append('avatar', this.state.file)
    formData.append('password', this.state.password)

    fetch(`${API_URL}/users`, {
      method: 'POST',
      body: formData
      })
    .then( res => res.json())
    .then( response => {
      if (response.errors) {
        alert(response.errors)
      } else {
          console.log('after the fetch', response)
          this.props.setCurrentUser(response)
          localStorage.setItem("user_id", response.id)
          this.props.history.push('/profile')
    }})
    }
  }

  handleDrop = (droppedFiles) => {
    this.setState({
      file: droppedFiles[0]
    })
  }

  // componentDidMount () {
  //   fetch(`${API_URL}/users`)
  //   .then( res => res.json())
  //   .then( users => {
  //     this.setState({
  //       users: users
  //     })
  //   })
  // }

  render () {
    return (
      <Fragment>
        <Form id="form">
          <Header as='h2'>Create an Account</Header>
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
              placeholder='First Name'
              onChange={this.handleChange}
              value={this.state.first_name}
              name="first_name"
            />
            <input
              id="inputField"
              placeholder='Last Name'
              onChange={this.handleChange}
              value={this.state.last_name}
              name="last_name"
            />
            <input
              id="inputField"
              placeholder='Password'
              onChange={this.handleChange}
              value={this.state.password}
              name="password"
            />
          </Form.Field>
          <Dropzone onDrop={this.handleDrop}>
          {({getRootProps, getInputProps}) => (
            <section>
            <div id="dropzone" {...getRootProps()}>
            <input {...getInputProps()} />
            <Icon name='user circle' size='huge' id="fileImage" />
            <p>Drag or click to select your profile picture!</p>
            </div>
            </section>
          )}
          </Dropzone>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>

          <Button
            type='submit'
            onClick={this.handleClick}
          >
            Submit
          </Button>
      </Form>
      </Fragment>
    )
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

function mapStateToProps (state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, mapDispatchToprops) (NewUserForm)
