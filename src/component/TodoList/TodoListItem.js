import React from "react";

function TodoListItem(props) {
  return (
    <li key={props.todoItem.toString() + props.index}>
      第{props.index}个事项是：{props.todoItem}
      <button onClick={props.deleteTodoList.bind(props.index)}>删除</button>
    </li>
  );
}

export default TodoListItem;
