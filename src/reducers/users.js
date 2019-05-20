const defaultState = {
  users: [],
}


function usersReducer(state = defaultState, action){

  switch(action.type){
    case "SET_USERS":
      return {...state, users: action.payload}
    case "SET_CURRENT_USER":
      return {...state, current_user: action.payload}
    default:
      return state
  }
}

export default usersReducer
