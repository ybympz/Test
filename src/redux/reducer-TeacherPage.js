let ADDPUPILSCHANGE = "ADD-PUPILS-CHANGE"

let initialState = {
    addPupilsInProgress: false,
    pupils: []
}

export const addPupilsChange = (inProgress) => ({type: ADDPUPILSCHANGE, inProgress});

let TeacherPageReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADDPUPILSCHANGE: {
            return {...state,addPupilsInProgress: action.inProgress}
        }
        default: {
            return state
        }
    }
}

export default TeacherPageReducer