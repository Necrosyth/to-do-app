import React from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";
const App = () => {
  return (
    <>
      <div className="container">
      <h1 className="text-center">To-Do List App</h1>
        <Form/>
        <Todos/>
      </div>
    </>
  );
};

export default App;
