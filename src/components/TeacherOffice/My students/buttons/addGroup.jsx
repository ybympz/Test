import "./buttons.scss"
import button from "../../../../assets/Add-button-pupil.svg";

let AddGroup = () => {
    return (
        <div ClassName="wrapper">
            <button className='button-add'>
                <img src={button}/>
                <span className="title">Добавить ученика</span>
            </button>
        </div>
    )
}

export default AddGroup