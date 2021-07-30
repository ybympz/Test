import {combineReducers, createStore} from "redux"
import TeacherPageReducer from "./reducer-TeacherPage";

let reducers = combineReducers({
    TeacherPage: TeacherPageReducer
})

let store = createStore(reducers)

window.store = store

export default store