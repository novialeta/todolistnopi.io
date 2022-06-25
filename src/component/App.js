import React from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [],
      id: "",
      todo: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        lists: [
          ...this.state.lists,
          {
            id: this.state.lists.length + 1,
            todo: this.state.todo,
          },
        ],
      });
    } else {
      const todoNotSelected = this.state.lists
        .filter((list) => list.id !== this.state.id)
        .map((filterList) => {
          return filterList;
        });

      this.setState({
        lists: [
          ...todoNotSelected,
          {
            id: this.state.lists.length + 1,
            todo: this.state.todo,
          },
        ],
      });
    }

    this.setState({
      todo: "",
      id: "",
    });
  };

  editData = (id) => {
    const todoSelected = this.state.lists
      .filter((list) => list.id === id)
      .map((filterList) => {
        return filterList;
      });

    this.setState({
      todo: todoSelected[0].todo,
      id: todoSelected[0].id,
    });
  };

  hapusData = (id) => {
    const newToDo = this.state.lists
      .filter((list) => list.id !== id)
      .map((filterList) => {
        return filterList;
      });

    this.setState({
      lists: newToDo,
    });
  };

  render() {
    return (
      <div className="container mt-4">
        <ToDoForm
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ToDoList
          lists={this.state.lists}
          editData={this.editData}
          hapusData={this.hapusData}
        />
      </div>
    );
  }
}

export default App;
