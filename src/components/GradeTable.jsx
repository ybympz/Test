import "./GrabeTable.scss"

let GradeTable = (props) =>{
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
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
            </tr>
            </tbody>
        </table>
        </div>
    )
}

export default GradeTable