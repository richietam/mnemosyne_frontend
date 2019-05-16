import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

const SubmitButton = (props) => (
  <Button
    type='submit'
    onClick={this.handleClick}
  >
    Submit
  </Button>
)

function mapStateToProps (state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps) (SubmitButton)
