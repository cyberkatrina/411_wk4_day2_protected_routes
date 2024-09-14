import { combineReducers } from "redux"


const hello = (state = null) => state
const poop = (state = null) => state
const cars = (state = []) => state
const user = (state = null) => state


export default combineReducers({hello, poop, cars, user})

// !RULE
// all properties on state have reducers
// all reducers get exported in the combineReducers object
// all reducers must return state, cant return undefined!