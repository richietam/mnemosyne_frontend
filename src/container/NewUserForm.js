import React, { Component } from 'react'
import { Button, Checkbox, Form, Icon } from 'semantic-ui-react'
import Dropzone from 'react-dropzone'
import UserCard from '../component/UserCard'
import { connect } from 'react-redux'

class NewUserForm extends Component {

  state = {
    username: "",
    file: null,
    users: []
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleClick = () => {

    let formData = new FormData()
    formData.append('username', this.state.username)
    formData.append('avatar', this.state.file)

    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: formData
      })
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
    console.log('newUserForm', this.props.users)
    return (
      <Form id="form">
          <Form.Field>
            <label>First Name</label>
            <input
              placeholder='Username'
              onChange={this.handleChange}
              value={this.state.username}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>

          <Dropzone onDrop={this.handleDrop}>
            {({getRootProps, getInputProps}) => (
            <section>
              <div id="dropzone" {...getRootProps()}>
                <input {...getInputProps()} />
                <Icon name='file image outline' size='huge' id="fileImage" />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
            )}
          </Dropzone>

          <Button
            type='submit'
            onClick={this.handleClick}
          >
            Submit
          </Button>

      < UserCard
        users={this.state.users[11]}
      />

        </Form>
    )
  }
}

function mapStateToProps (state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps) (NewUserForm)
