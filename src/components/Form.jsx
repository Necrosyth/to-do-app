import React, { useState } from "react";

const Form = ({setTodos,todos}) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(title,description)
    const obj={
      id:Math.random(),
      title,
      description
    }
    setTodos([...todos,obj])

    setTitle("")
    setDescription("")

  }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="my-5 container text-center">
        <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" type="text" className="mx-2" />
        <input value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description" type="text" className="mx-2" />
        <button className="btn btn-warning">Add</button>
      </div>
      </form>
    </>
  );
};

export default Form;
