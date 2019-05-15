import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewUserForm from './container/NewUserForm'
// import { connect } from 'react-redux'


class App extends Component {
  render () {
    return (
      <div>
        < NewUserForm />
      </div>
    );
  }
}

// function mapDispatchToprops(dispatch) {
//   // console.log(dispatch)

//   return {
//     setTurtles: (turtles) => {
//       console.log("2. SET TURTLES IS CALLED WOOOO")
//       // dispatch is our new setState and it takes an object with a type and a payload
//       dispatch({type: "SET_TURTLES", payload: turtles})
//     }
//   }
// }

export default App;
