import React, { useState } from "react";
import "./todoapp.css";

function Todoapp() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleChange(e) {
    setTask(e.target.value);
  }

  // to lock your data
  function AddTask() {
    // method / function
    if (task !== "") {
      const taskDetails = {
        // object of task
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };
      setTaskList([...taskList, taskDetails]); // spread operator to add previous or apend data
    }
  }
  function deleteTask(e, id) {
    //id to uniquely identify the task to delete
    e.preventDefault();
    setTaskList(taskList.filter((t) => t.id != id)); //filtering our taskList we don't wan tto delete
  }

  // this a how we can change or update a object value in the array of object
  function taskCompleted(e, id) {
    e.preventDefault();
    //let's find index of element
    const element = taskList.findIndex((elem) => elem.id == id);
    //copy array into new variable
    const newTaskList = [...taskList];
    //edit our element
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };
    setTaskList(newTaskList);
  }

  return (
    <div className="todo">
      <input
        type="text"
        name="text"
        id="text"
        placeholder="text here.."
        onChange={(e) => handleChange(e)}
      />
      <button className="add-btn" onClick={AddTask}>
        Add
      </button>
      {taskList !== [] ? (
        <ul>
          {taskList.map((t) => (
            //  to change the style of button we have to toggle with condition}
            <li className={t.isCompleted ? "crossText" : "listitem"}>
              {t.value}
              <button
                className="completed"
                onClick={(e) => taskCompleted(e, t.id)}
              >
                Completed
              </button>
              <button className="delete" onClick={(e) => deleteTask(e, t.id)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
export default Todoapp;
