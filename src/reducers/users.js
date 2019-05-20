const defaultState = {
  users: [],
  current_user: null
}


function usersReducer(state = defaultState, action){

  switch(action.type){
    case "SET_USERS":
      return {...state, all_users: action.payload}
    case "SET_CURRENT_USER":
      return {...state, current_user: action.payload}
    default:
      return state
  }
}

export default usersReducer
