import React, { useContext } from "react";
import Table from "react-bootstrap/Table"
import ClassTableRow from "./class-table-row";
import { GlobalContext } from '../../context/GlobalState';
import { useParams, useNavigate, Link } from 'react-router-dom';



function ClassList() {
    const { classs } = useContext(GlobalContext);
   
    const DataTable = () => {
        return classs.map((res, i) => {
            return <ClassTableRow obj={res} key={i} />
        })
    }

    return (
        <div className="table-wrapper">
            <Link to={"/create-class"} className="btn btn-danger btn-block">Add Class</Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nama</th>
                    </tr>
                </thead>
                <tbody>
                    {DataTable()}
                </tbody>
            </Table>
        </div>
    );
}

export default ClassList


