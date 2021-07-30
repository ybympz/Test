import {connect} from "react-redux";
import GradeTable from "../GradeTable";

let GradeTableContainer = (props) =>{
    return(
        <GradeTable/>
    )
}

export default connect()(GradeTableContainer)