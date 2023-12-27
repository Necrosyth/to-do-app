import React from "react";

const Todos = () => {
  return (
    <>
      <div className="container">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>
            <button className="btn btn-warning mx-3">Add</button>
            <button className="btn btn-danger mx-3">Delete</button>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Todos;
