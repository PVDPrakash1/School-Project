import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { GlobalContext } from '../../context/GlobalState';


function ClassTableRow(props){
    const { removeClass } = useContext(GlobalContext);
 
    const deleteClass = (id) => {
        removeClass(id)
    }

    return (
        <tr>
            <td>{props.obj.name}</td>
            <td>
                <Link className="btn btn-sm btn-primary" to={"/edit-class/"+props.obj.id}>
                    Edit
                </Link>
                <Button onClick={() => deleteClass(props.obj.id)} size="sm" variant="danger">Delete</Button>
            </td>
        </tr>
    )
}

export default ClassTableRow
