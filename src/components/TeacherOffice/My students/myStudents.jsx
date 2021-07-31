import React, {useState} from 'react';
import AddStudent from "./buttons/addStudent";
import AddGroup from "./buttons/addGroup";
import './myStudents.scss'
import StudentIcon from "./StudentIcon/StudentIcon";

let MyStudents = (props) => {
    console.log(props)
    const [changer, setChanger] = useState(true);

    return (
        <div className="container myStudents">
            <h1 className="Heading">Мои ученики</h1>
            <div className="Buttons">
                <span onClick={() => {setChanger(false)}}>Ученики </span>
                <span onClick={() => {setChanger(true)}}>Группы</span>
            </div>
            <div className="">
                <div className="Buttons2">
                    <AddStudent onClick={() => props.addPupilsChange(true)}/>
                    <AddGroup/>
                </div>
                <div className="Lenta">
                    {props.pupils.map((pupils)=>(
                        <div className="item">
                            <StudentIcon  name={pupils.name}/>
                        </div>
                    ))}
                </div>
            </div>
    </div>)
}

export default MyStudents