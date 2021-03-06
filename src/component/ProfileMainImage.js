import React from 'react'
import { Header } from 'semantic-ui-react'

const ProfileMainImage = (props) => (
  <div className="ProfileMainImage">
    <img
      src= ""
      alt= ""
    />

    <Header
      as='h1'
      id="ProfileMainImageH1"
    >
      {props.first_name + " " + props.last_name}
    </Header>

    <Header
      as='h3'
      id= "ProfileMainImageH3"
    >
      Lorem ipsum dimsum
    </Header>

  </div>

)

export default ProfileMainImage
