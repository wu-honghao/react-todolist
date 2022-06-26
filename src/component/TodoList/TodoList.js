import React, { useState } from "react";
import "./TodoList.css";
import TodoListItem from "./TodoListItem.js";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addTodoList = (event) => {
    event.preventDefault();
    let list = { value: value };
    if (value.trim() !== "") {
      list.id = uuidv4();
      setTodoList([...todoList, list]);
    }
  };

  const deleteTodoList = (index) => {
    setTodoList([...todoList.slice(0, index), ...todoList.slice(index + 1)]);
  };

  const todoListItems = todoList.map((todoItem, index) => (
    <TodoListItem
      key={todoItem.id}
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
