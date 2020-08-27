import React from 'react';
import logo from './logo.svg';
import './App.css';
import fakeData from './fakeData/courses';
import CourseList from './components/CoursesComp/CourseList';
import Cart from './components/Cart/Cart';


function App() {
  console.log(fakeData);
  return (
    <div className="App">

      {
        fakeData.map(course => <CourseList course = {course}></CourseList>)
      }
    
    </div>  
  );
}

export default App;
