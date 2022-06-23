import React from "react";
import "./TodoList.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", todoList: [] };
    this.handleChange = this.handleChange.bind(this);
    this.addTodoList = this.addTodoList.bind(this);
    this.deleteTodoList = this.deleteTodoList.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  addTodoList(event) {
    event.preventDefault();
    if (this.state.value.trim() !== "") {
      this.setState({ todoList: [...this.state.todoList, this.state.value] });
    }
  }

  deleteTodoList(index) {
    this.state.todoList.splice(index, 1);
    this.setState({
      todoList: this.state.todoList,
    });
  }

  render() {
    const todoListItems = this.state.todoList.map((todoItem, index) => (
      <li key={todoItem.toString() + index}>
        第{index}个事项是：{todoItem}
        <button onClick={this.deleteTodoList.bind(this, index)}>删除</button>
      </li>
    ));

    return (
      <div className="todo-list">
        <form onSubmit={this.addTodoList}>
          <input
            value={this.state.value}
            type="text"
            onChange={this.handleChange}
            placeholder="请输入代办事项"
          />
          <input type="submit" value="添加" />
        </form>

        <ul>{todoListItems}</ul>
      </div>
    );
  }
}

export default TodoList;
