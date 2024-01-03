import React from "react";

const Todos = ({todos}) => {
//   console.log(todos);
  return (
    <>
      <div className="container">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Act</th>
            </tr>
          </thead>
          {todos.map((d) => {
            return (
              <>
                <tbody key={d.id}>
                  <tr>
                    <td>{d.title}</td>
                    <td>{d.description}</td>
                    <td>
                      <button className="btn btn-warning mx-3">Add</button>
                      <button className="btn btn-danger mx-3">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Todos;
