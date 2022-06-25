import React, { useState } from "react";
import "./TodoList.css";
import TodoListItem from "./TodoListItem.js";

function TodoList() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addTodoList = (event) => {
    event.preventDefault();
    if (value.trim() !== "") {
      setTodoList([...todoList, value]);
    }
  };

  const deleteTodoList = (index) => {
    todoList.splice(index, 1);
    setTodoList(todoList);
  };

  const todoListItems = todoList.map((todoItem, index) => (
    <TodoListItem
      todoItem={todoItem}
      index={index}
      deleteTodoList={deleteTodoList}
    />
  ));

  return (
    <div className="todo-list">
      <form onSubmit={addTodoList}>
        <input
          value={value}
          type="text"
          onChange={handleChange}
          placeholder="请输入代办事项"
        />
        <input type="submit" value="添加" />
      </form>

      <ul>{todoListItems}</ul>
    </div>
  );
}

export default TodoList;
