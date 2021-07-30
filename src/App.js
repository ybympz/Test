import MyStudentsContainer from "./../src/components/My students/myStudentsContainer"
import GradeTableContainer from "./components/My students/GradeTableContainer";
import AddStudent from "./components/My students/buttons/addStudent";

const App = (props) => {
    return (
        <div>
            <MyStudentsContainer/>
            <GradeTableContainer/>
        </div>
    )
}

export default App;
