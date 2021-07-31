import {connect} from "react-redux";
import GradeTable from "./GradeTable";

let GradeTableContainer = (props) =>{
    return(
        <GradeTable {...props}/>
    )
}

let mapStateToProps = (store) => {
    return{
        pupils: store.TeacherPage.pupils,
        currentStudent: store.TeacherPage.currentStudent
    }
}

let mapDispatchToProps = () =>{

}
export default connect(mapStateToProps,mapDispatchToProps)(GradeTableContainer)