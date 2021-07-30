import MyStudentsContainer from "./../src/components/My students/myStudentsContainer"
import GradeTableContainer from "./components/My students/GradeTableContainer";
import AddStudent from "./components/My students/buttons/addStudent";
import SidebarContainer from "./123/SidebarContainer";

const App = (props) => {
    return (
        <div>
            <SidebarContainer/>
            <MyStudentsContainer/>
            <GradeTableContainer/>
        </div>
    )
}

export default App;
