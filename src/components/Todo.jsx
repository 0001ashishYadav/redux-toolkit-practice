import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-center mt-2">-: Todos :-</div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <ul className="w-[90%] mx-auto mt-2 bg-green-500 px-3 py-1 rounded text-white">
            <li className="flex justify-between items-center">
              <p>{todo.text}</p>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="hover:text-green-700 "
              >
                ❌
              </button>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default Todo;
