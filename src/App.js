import { useState } from "react"
import Header from "./components/Header";
import List from "./components/List";

import "./App.css";
import Tasks from "./components/Tasks";


function App() {

  const [tasks, setTasks] = useState( 
    [
        {
            id: 1,
            text: 'Doctors Appointement',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at school',
            day: 'Feb 6th at 2:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        },
    ] 
)

  const name = "David";
  const x = true; // Condition Js possible

    // Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    } 

// Toujours mettre ses var au dessus de return
  return (
    // Le contenu qui sera affiché
    // Return ne peut retourner qu'un seul élement à la fois.
    // Donc <div> sera le parent de tout les élement à affiché
    <div className="container"> 
      <h1> Hello World </h1>
      <h2> Hello {name}</h2>
      {/* on appel les var entre {} */}
      <p> Possible operation like {1 + 1}</p>
      {/* Possible de faire opération aritm' entre {} */}
      <p> Possible condition {x ? "Yes" : "No"}</p>
      {/* Possible de mettre des conditions entre {} */}

    <Header title='Hello there' /> 
    {/* title = props que l'on récupère dans Header.js avec la  const Header = (props) */}

    <List titre = "List"/>

    <Tasks tasks={tasks} onDelete= {deleteTask}/>
    </div>
  );
}

export default App;
