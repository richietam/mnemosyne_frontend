import React, { Component, Fragment } from 'react'
import { Button, Checkbox, Form, Icon, Header, Grid } from 'semantic-ui-react'
import Dropzone from 'react-dropzone'
import UserCard from '../component/UserCard'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import PreviewGalleryCards from '../component/PreviewGalleryCards'

class GalleryForm extends Component {

  state = {
    albumName: "",
    date: "",
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
      alert("Please add some images!")
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
      files: droppedFiles
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
     return <Redirect to='/profile'/>;
   }

    return (
      <div className="NewGalleryForm">

        <Grid>
          <Grid.Column width={16}>
            <Form id="">
              <Header as='h2'>Create a New Photo Album</Header>
              <Form.Field>
                <input
                  id="inputField"
                  placeholder='Album Name'
                  onChange={this.handleChange}
                  value={this.state.albumName}
                  name="albumName"
                />
                <input
                  id="inputField"
                  placeholder='Date'
                  onChange={this.handleChange}
                  value={this.state.date}
                  name="date"
                />
              </Form.Field>

              <Dropzone onDrop={this.handleDrop}>
              {({getRootProps, getInputProps}) => (
                <section>
                <div id="dropzone" {...getRootProps()}>
                <input {...getInputProps()} />
                <Icon name='user circle' size='huge' id="fileImage" />
                <p>Drag or click to upload your gallery photos!</p>
                </div>
                </section>
              )}
              </Dropzone>

            </Form>
          </Grid.Column>
        </Grid>

        <Grid>
          <Grid.Column
            width={16}
          >
            <PreviewGalleryCards />
          </Grid.Column>
        </Grid>

        <Button
          type='submit'
          id="NewGalleryFormButton"
          onClick={this.handleClick}
        >
          Save Album
        </Button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps) (GalleryForm)
