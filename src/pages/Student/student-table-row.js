import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { GlobalContext } from '../../context/GlobalState';


function StudentTableRow(props){
    const { removeStudent } = useContext(GlobalContext);
 
    const deleteStudent = (id) => {
        removeStudent(id)
    }

    return (
        <tr>
            <td>{props.obj.name}</td>
            <td>{props.obj.class}</td>
            <td>{props.obj.section}</td>
            <td>
                <Link className="btn btn-sm btn-primary" to={"/edit-student/"+props.obj.id}>
                    Edit
                </Link>
                <Button onClick={() => deleteStudent(props.obj.id)} size="sm" variant="danger">Delete</Button>
            </td>
        </tr>
    )
}

export default StudentTableRow
