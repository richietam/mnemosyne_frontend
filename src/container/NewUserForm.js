import React, { Component, Fragment } from 'react'
import { Button, Checkbox, Form, Icon, Header } from 'semantic-ui-react'
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
// import SubmitButton from '../component/SubmitButton'

class NewUserForm extends Component {

  state = {
    username: "",
    firstName: "",
    lastName: "",
    file: null,
    redirect: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = (e) => {

    if (this.state.file === null){
      alert("Please add an avatar")
    }

    if (this.state.file !== null && this.state.username) {
    let formData = new FormData()
    formData.append('username', this.state.username)
    formData.append('avatar', this.state.file)

    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: formData
      })
    .then(this.setState({
      redirect: true
    }))
    }
  }

  handleDrop = (droppedFiles) => {
    this.setState({
      file: droppedFiles[0]
    })
  }

  componentDidMount () {
    fetch('http://localhost:3000/api/users')
    .then( res => res.json())
    .then( users => {
      this.setState({
        users: users
      })
    })
  }

  render () {
    if (this.state.redirect) {
     return <Redirect to='/home'/>;
   }
   console.log(this.state)
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
              value={this.state.firstName}
              name="firstName"
            />
            <input
              id="inputField"
              placeholder='Last Name'
              onChange={this.handleChange}
              value={this.state.lastName}
              name="lastName"
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

function mapStateToProps (state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps) (NewUserForm)
