import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { GlobalContext } from '../../context/GlobalState';


function CreateClass() {
    let navigate = useNavigate();
    const {  addClass } = useContext(GlobalContext);

    const [ selectedClass, setSelectedClass] = useState({
        id: '',
        name: '',
    });


    const onChangeClass = (key, e) => {
        setSelectedClass({...selectedClass, [key]: e.target.value})
    }

    const onSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        addClass(selectedClass);
        navigate('/classs')
    }

    return (
        <div className="form-wrapper">
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="Fullname">
                    <Form.Label>Name :</Form.Label>
                    <Form.Control type="text" value={selectedClass?.name} onChange={(event) => onChangeClass('name', event)} />
                </Form.Group>

                
                <Button variant="success" size="lg" block="block" type="submit">Save</Button>
                <Link to={"/classs"} className="btn btn-danger btn-block">Cancel</Link>
            </Form>

        </div>
    );
}

export default CreateClass
