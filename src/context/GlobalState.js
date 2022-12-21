import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';

const initialState = {
  students: [
    { id:1,  name : 'Prakash', class: '10', section: 'A'},
    { id:2,  name : 'Rajesh', class: '10', section: 'A'},
    { id:3,  name : 'Gouri', class: '10', section: 'A'}
  ],
  classs: [
    {id:1, name: 'Class 1'},
    {id:2, name: 'Class 2'},
    {id:3, name: 'Class 3'},
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addStudent(student) {
    dispatch({
      type: "ADD_STUDENT",
      payload: student
    });
  }

  function updateStudent(student) {
    dispatch({
      type: "EDIT_STUDENT",
      payload: student
    });
  }

  function removeStudent(id) {
    dispatch({
      type: "REMOVE_STUDENT",
      payload: id
    });
  }

  function addClass(classname) {
    dispatch({
      type: "ADD_CLASS",
      payload: classname
    });
  }

  function updateClass(classname) {
    dispatch({
      type: "EDIT_CLASS",
      payload: classname
    });
  }

  function removeClass(id) {
    dispatch({
      type: "REMOVE_CLASS",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        students: state.students,
        classs: state.classs,
        addStudent,
        updateStudent,
        removeStudent,
        addClass,
        updateClass,
        removeClass,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};