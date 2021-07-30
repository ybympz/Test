import React, {useState} from 'react';
import AddStudent from "./buttons/addStudent";
import AddGroup from "./buttons/addGroup";
import './myStudents.scss'
import addButton from "../../assets/Add-button.svg"
import {addPupilsChange} from "../../redux/reducer-TeacherPage";

let MyStudents = (props) => {

    const [changer, setChanger] = useState(true);

    return (<div className="container myStudents">
        <div ClassName={"heading"}>
            <h1>Мои ученики</h1>
        </div>
        <span onClick={() => {
            setChanger(false)
        }}>Ученики </span>
        <span onClick={() => {
            setChanger(true)
        }}>Группы</span>
        <div className="row" style={{padding: "18px"}}>
            <div className="col-md-2">
                <div className="row">
                    <div className="col-md-11" style={{margin: "7px" ,background: "red", height: "43px"}}>
                        <AddStudent onClick={()=> props.addPupilsChange(true)}/>
                    </div>
                    <div className="col-md-11" style={{margin: "7px" ,background: "red", height: "43px" }}>
                        <button>Добавить группу</button>
                    </div>
                </div>
            </div>
            <div className="col-md-10" style={{background: "orange"}}>
                <div className="row">
                    <div className="col-3">
                        1 из 3
                    </div>
                    <div className="col-3">
                        2 из 3 (шире)
                    </div>
                    <div className="col-3">
                        3 из 3
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default MyStudents