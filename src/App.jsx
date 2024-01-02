import React, { useState } from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "This is the first title",
      description: "This is the description",
    },
    {
      id: 2,
      title: "This is the second title",
      description: "This is the second description",
    },
    {
      id: 3,
      title: "This is the third title",
      description: "This is the third description",
    },
  ]);

  return (
    <>
      <div className="container">
        <h1 className="text-center">To-Do List App</h1>
        <Form todos={todos} setTodos={setTodos}/>
        <Todos todos={todos} />
      </div>
    </>
  );
};

export default App;
