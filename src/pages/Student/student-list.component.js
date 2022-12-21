import React, { useContext } from "react";
import Table from "react-bootstrap/Table"
import StudentTableRow from "./student-table-row";
import { GlobalContext } from '../../context/GlobalState';
import { useParams, useNavigate, Link } from 'react-router-dom';



function StudentList() {
    const { students } = useContext(GlobalContext);
   
    const DataTable = () => {
        return students.map((res, i) => {
            return <StudentTableRow obj={res} key={i} />
        })
    }

    return (
        <div className="table-wrapper">
            <Link to={"/create-student"} className="btn btn-danger btn-block">Add Student</Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Clas</th>
                        <th>Section</th>
                    </tr>
                </thead>
                <tbody>
                    {DataTable()}
                </tbody>
            </Table>
        </div>
    );
}

export default StudentList


