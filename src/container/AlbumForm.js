import React, { Component } from 'react'
import { Button, Form, Icon, Header, Grid } from 'semantic-ui-react'
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import PreviewGalleryCards from '../component/PreviewGalleryCards'

class AlbumForm extends Component {

  state = {
    name: "",
    date: "",
    files: null,
    redirect: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = (e) => {

    if (this.state.files === null){
      alert("Please add some images!")
    }

    if (this.state.files !== null && this.state.name && this.state.date) {

    let formData = new FormData()

    formData.append('name', this.state.name)
    formData.append('date', this.state.date)
    formData.append('user_id', this.props.current_user.id)

    for (const file of this.state.files) {
      formData.append('images[]', file, file.name)
    }

    fetch('http://localhost:3000/api/albums', {
      method: 'POST',
      body: formData
      })
    .then( res => res.json() )
    .then( response => {
      console.log(response)
      this.props.history.push('/profile')
    })
    }
  }

  handleDrop = (droppedFiles) => {

    if (this.state.files) {
      const combinedFiles = this.state.files.concat(droppedFiles)
      this.setState({
        files: combinedFiles
      })
    } else {
      this.setState({
        files: droppedFiles

      })

    }
  }

  handlePreviewClick = (index) => {
    console.log('preview image being clicked', index)
    this.state.files.splice(index, 1)
    this.setState({
      files: this.state.files
    })
  }

  renderUploadPreview = () => {
    return this.state.files.map( (file, index) => {
      return <div>
        <img
          id="imagePreview"
          src={URL.createObjectURL(file)}
          onClick={() => this.handlePreviewClick(index)}
        />
        {file.name} {index}
      </div>
    })
  }

  render () {

    if (!this.props.current_user) return null
    console.log('AlbumForm redux state', this.state.files)

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
                  value={this.state.name}
                  name="name"
                />
                <input
                  id="inputField"
                  placeholder='Date'
                  onChange={this.handleChange}
                  value={this.state.date}
                  name="date"
                />
              </Form.Field>

              <Dropzone
                onDrop={this.handleDrop}
              >
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

            {/*this.state.files.length > 0 ? <div><img src={file.preview}/></div> : null*/}

          </Grid.Column>
        </Grid>
          {
            this.state.files ?
              this.renderUploadPreview()
             :
              null
           }


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

const mapStateToProps = ({ users: {current_user} } ) => ({ current_user })

// function mapStateToProps (state) {
//   return {
//     users: state.users
//   }
// }

export default connect(mapStateToProps) (AlbumForm)
