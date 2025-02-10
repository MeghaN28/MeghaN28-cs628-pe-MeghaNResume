import React, { useState, useEffect, useRef } from "react";
import ToDoItem from "./ToDoItem"; 

const ToDoList = () => {
  const [todositems, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todositems"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todositems", JSON.stringify(todositems));
  }, [todositems]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todositems, task]);
    setTask("");
    inputRef.current.focus();
  };

  const deleteTask = (index) => {
    setTodos(todositems.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 shadow-lg rounded-lg text-center">
      <h1 className="text-3xl font-bold mb-6">ToDo List App</h1>
      <div className="mb-4">
        <input
          ref={inputRef}
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-3 w-full rounded-md"
          placeholder="Enter task description"
        />
      </div>
      <button
        onClick={addTask}
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 mb-4"
      >
        Add Task
      </button>
      <div>
        {todositems.length > 0 ? (
          todositems.map((todo, index) => (
            <ToDoItem key={index} todo={todo} onDelete={() => deleteTask(index)} />
          ))
        ) : (
          <p className="text-gray-500">No tasks yet!</p>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
