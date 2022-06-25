import React from "react";
import { Table } from "react-bootstrap";

const ToDoList = ({ lists, index, editData, hapusData }) => {
  return (
    <div className="container mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>To Do List</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((list) => {
            return (
              <tr key={index}>
                <td>{list.todo}</td>
                <td>
                  <button
                    className="btn btn-warning mr-3"
                    onClick={() => editData(list.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger "
                    onClick={() => hapusData(list.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ToDoList;
