import React from 'react'
import {connect} from "react-redux";
import {addPupilsChange} from "../../redux/reducer-TeacherPage";
import MyStudents from "./myStudents";


let MyStudentsContainer = (props) => {
    return (
        <MyStudents {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        pupils: state.TeacherPage.pupils,
        addPupilsInProgress: state.TeacherPage.addPupilsInProgress
    }
}

export default connect(mapStateToProps, {addPupilsChange})(MyStudentsContainer)