import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonList from './Comp/PersonList'
import TaskList from './Comp/TaskList'
import NewTask from './Comp/NewTask'
import DelTask from './Comp/DelTask'
import UpdateTask from './Comp/UpdateTask'
function App() {
  return (
    <div className="App">
      <NewTask/>
      <DelTask/>
      <UpdateTask/>
      <TaskList/>
    </div>
  );
}

export default App;
