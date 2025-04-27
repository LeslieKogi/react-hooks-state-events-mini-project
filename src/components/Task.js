import React from "react";

function Task({category, text, keyt, handleDelete}) {

  

console.log (category,text)
  return (
    <div key={keyt} className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={()=>handleDelete(text)} className="delete">X</button>
    </div>
  );
}

export default Task;
