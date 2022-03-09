import './App.css';
import React, { Component } from 'react';
import Student from './Components/Student.js'
import students from './Components/students.js'

class App extends Component {
  render() { 
    const studentsComponent = students.map((student, index) =>{
      return(
        <Student 
        key={`student-${index}`}
        name={student.name}
        bio={student.bio}
        scores={student.scores}
        />
      )
    })
    return (
      <div className="App"> 
        {studentsComponent}
      </div>)
    ;
  }
}
 
export default App;



