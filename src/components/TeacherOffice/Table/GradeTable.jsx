import "./GrabeTable.scss"

let GradeTable = (props) =>{
    console.log(props)
    return(
        <div className="table_wrapper">
        <table className="table table-bordered table-hover">
            <thead>
            <tr className="table-primary">
                <th>№</th>
                <th>Название урока</th>
                <th>Упражнений в уроке</th>
                <th>Упражнений выполнено</th>
                <th>Ошибок</th>
                <th>Неточности</th>
                <th>Потраченное время</th>
                <th>Заработано террикоинов</th>
            </tr>
            </thead>
            <tbody>
            {props.pupils[props.currentStudent].lessons.map((lessons) =>(
                <tr>
                    <th scope="row">{lessons.id}</th>
                    <td>{lessons.name}</td>
                    <td>{lessons.count}</td>
                    <td>{lessons.countTrue}</td>
                    <td>{lessons.mistake}</td>
                    <td>{lessons.inaccuracy}</td>
                    <td>{lessons.time}</td>
                    <td>{lessons.coins}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    )
}

export default GradeTable