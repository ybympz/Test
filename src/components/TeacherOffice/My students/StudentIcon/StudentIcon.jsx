import ava from "./../../../../assets/mad-scientist 1.svg"

let StudentIcon = (props) => {
    return (
        <>
            <div>
            <img src={ava}/>
            </div>
            <div>
            <span>{props.name}</span>
            </div>
        </>
    )
}

export default StudentIcon