import React from "react";

const ToDoItem = ({ todo, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-3 bg-white border rounded-lg shadow-sm mt-2">
      <span className="text-lg font-medium">{todo}</span>
      <button
        onClick={onDelete}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default ToDoItem;
