let ADDPUPILSCHANGE = "ADD-PUPILS-CHANGE"

let initialState = {
    addPupilsInProgress: false,
    currentStudent: 0,
    pupils: [
        {id: 1,name: "Константин", avatar: null, lessons: [{id: 1, name:"Урок 1", count: 100, countTrue: 90, mistake: 19,
                inaccuracy: 33, time: 100, coins: 1000}]},
        {id: 2, name: "Алексей", lessons: [{id: [1,2,3]},{name: ["Урок1", "Урок2", "Урок3"]}, {count: [100, 30, 70]},
                {countTrue: [90, 25, 70]}, {Mistake: [19, 19, 19]}, {inaccuracy: [33, 33, 33]}
                , {time: [100,100,100]}, {coins: [1000,1000,999]}]},
        {id: 3, name: "Ирина", lessons: [{id: [1,2,3]},{name: ["Урок1", "Урок2", "Урок3"]}, {count: [100, 30, 70]},
                {countTrue: [90, 25, 70]}, {Mistake: [19, 19, 19]}, {inaccuracy: [33, 33, 33]}
                , {time: [100,100,100]}, {coins: [1000,1000,999]}]}
    ]
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