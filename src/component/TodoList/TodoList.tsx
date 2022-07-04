import React, { useState, FormEvent } from "react";
import "./TodoList.css";
import TodoListItem from "./TodoListItem";
import { v4 as uuidv4 } from "uuid";
import { ITodo } from "./interface";

const TodoList = () => {
  const [value, setValue] = useState<string>("");
  const [todoList, setTodoList] = useState<Array<ITodo>>([]);

  const handleChange = (event:any):void => {
    console.log(event)
    setValue(event.target.value);
  };

  const addTodoList = (event:FormEvent):void => {
    event.preventDefault();

    let list:ITodo = {
      value: value,
      id: ""
    };

    if (value.trim() !== "") {
      list.id = uuidv4();
      setTodoList([...todoList, list]);
    }
  };

  const deleteTodoList = (index:number) : void => {
    setTodoList([...todoList.slice(0, index), ...todoList.slice(index + 1)]);
  };

  const todoListItems = todoList.map((todoItem:ITodo, index:number) => (
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
};

export default TodoList;
