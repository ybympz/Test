import "./buttons.scss"
import add from '../../../../assets/Add-button-blue.svg'

let AddStudent = () => {
    return (
        <div>
            <button className='button-add'>
                <img className="picture" src={add}/>
                <span className="title">Добавить ученика</span>
            </button>
        </div>
    )
}

export default AddStudent