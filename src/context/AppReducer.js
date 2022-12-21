export default function appReducer(state, action) {
    switch (action.type) {
      case "ADD_STUDENT":
        return {
          ...state,
          students: [...state.students, action.payload],
        };
  
      case "EDIT_STUDENT":
        const updatedStudent = action.payload;

        console.log(updatedStudent);
  
        const updatedStudents = state.students.map((student) => {
          if (student.id === updatedStudent.id) {
            return updatedStudent;
          }
          return student;
        });
  
        return {
          ...state,
          students: updatedStudents,
        };
  
      case "REMOVE_STUDENT":
        return {
          ...state,
          students: state.students.filter(
            (student) => student.id !== action.payload
          ),
        };

      case "ADD_CLASS":
        return {
          ...state,
          classs: [...state.classs, action.payload],
        };
  
      case "EDIT_CLASS":
        const updatedClass = action.payload;

        console.log(updatedClass);
  
        const updatedClasss = state.classs.map((c) => {
          if (c.id === updatedClass.id) {
            return updatedClass;
          }
          return c;
        });
  
        return {
          ...state,
          classs: updatedClasss,
        };
  
      case "REMOVE_CLASS":
        return {
          ...state,
          students: state.classs.filter(
            (c) => c.id !== action.payload
          ),
        };

  
      default:
        return state;
    }
  };