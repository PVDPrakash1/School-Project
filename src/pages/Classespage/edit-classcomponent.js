import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { GlobalContext } from '../../context/GlobalState';


function EditClass() {
    let navigate = useNavigate();
    const { classs, updateClass } = useContext(GlobalContext);

    const [ selectedClass, setSelectedClass] = useState({
        id:'',
        name: ''
    });

    const params = useParams();

    console.log(params);


    const currentClassId = params.id;

    
    useEffect(() => {
        const selSt = classs.find((st) => st.id === parseInt(currentClassId));
        setSelectedClass(selSt);
    }, [currentClassId, classs])

    
    const onChangeClass = (key, e) => {
        setSelectedClass({...selectedClass, [key]: e.target.value})
    }

    const onSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        updateClass(selectedClass);
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

export default EditClass
