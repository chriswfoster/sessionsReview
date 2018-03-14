import axios from "axios"

//Constants
const GET_USER = "GET_USER"
const SET_AGE = "SET_AGE"

//Initial state
let initialState = {
  user: {}
}

//REDUCER

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER + "_PENDING":
      return Object.assign({}, state, { isLoading: true })
    case GET_USER + "_FULFILLED":
      return Object.assign({}, state, {
        user: action.payload,
        isLoading: false
      })
    case SET_AGE + "_PENDING":
      return Object.assign({}, state, { isLoading: true })
    case SET_AGE + "_FULFILLED":
      return Object.assign({}, state, {
        user: action.payload,
        isLoading: false
      })
    default:
      return state
  }
}

//Action Creator
export function getUser() {
  // return {
  //   type: GET_USER,
  //   payload: axios.get("/api/login").then(response => response.data)
  // }
}

export function updateAge(age) {
  // return {
  //   type: GET_USER,
  //   payload: axios
  //     .put("/api/setage", {
  //       age
  //     })
  //     .then(response => console.log(response.data))
  // }
}
