import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { GlobalContext } from '../../context/GlobalState';


function EditStudent() {
    let navigate = useNavigate();
    const { students, updateStudent } = useContext(GlobalContext);

    const [ selectedStudent, setSelectedStudent] = useState({
        name: '',
        class: '',
        section: ''
    });

    const params = useParams();

    console.log(params);


    const currentStudentId = params.id;

    
    useEffect(() => {
        const selSt = students.find((st) => st.id === parseInt(currentStudentId));
        setSelectedStudent(selSt);
    }, [currentStudentId, students])

    
    const onChangeStudent = (key, e) => {
        setSelectedStudent({...selectedStudent, [key]: e.target.value})
    }

    const onSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        updateStudent(selectedStudent);
        navigate('/students')
    }

    return (
        <div className="form-wrapper">
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="Fullname">
                    <Form.Label>Full Name :</Form.Label>
                    <Form.Control type="text" value={selectedStudent?.name} onChange={(event) => onChangeStudent('name', event)} />
                </Form.Group>

                <Form.Group controlId="Class">
                    <Form.Label>Class :</Form.Label>
                    <Form.Control as="select" className="custom-select select2" value={selectedStudent?.class} onChange={(event) => onChangeStudent('class', event)}>
                        <option value="">--Select Class--</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </Form.Control>
                </Form.Group>


                <Form.Group>
                    <Form.Label>Section :</Form.Label>
                    <Form.Control as="select" className="custom-select select2" value={selectedStudent?.section} onChange={(event) => onChangeStudent('section', event)}>
                        <option value="">--Select section--</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="success" size="lg" block="block" type="submit">Save</Button>
                <Link to={"/students"} className="btn btn-danger btn-block">Cancel</Link>
            </Form>

        </div>
    );
}

export default EditStudent
