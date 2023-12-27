import React from "react";

const Form = () => {
  return (
    <>
      <div className="my-5 container text-center">
        <input placeholder="Title" type="text" className="mx-2" />
        <input placeholder="Description" type="text" className="mx-2" />
        <button className="btn btn-warning">Add</button>
      </div>
    </>
  );
};

export default Form;
