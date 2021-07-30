import "./buttons.scss"
import add from './../../../assets/Add-button.svg'

let AddStudent = () => {
    return (
        <button className='button-add'>
            <img src={add}/>
            <span className='button-add__title'>Добавить ученика</span>
        </button>
    )
}

export default AddStudent