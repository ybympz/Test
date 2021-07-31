import React from 'react'
import {connect} from "react-redux";
import {addPupilsChange} from "../../../redux/reducer-TeacherPage";
import MyStudents from "./myStudents";


let MyStudentsContainer = (props) => {
    return (
        <MyStudents {...props}/>
    )
}

let mapStateToProps = (store) => {
    return {
        pupils: store.TeacherPage.pupils,
        addPupilsInProgress: store.TeacherPage.addPupilsInProgress
    }
}

export default connect(mapStateToProps, {addPupilsChange})(MyStudentsContainer)