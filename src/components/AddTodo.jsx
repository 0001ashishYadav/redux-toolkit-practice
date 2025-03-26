import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputValue));
    setInputValue("");
  };
  return (
    <form
      onSubmit={addTask}
      className="sticky top-0 left-0 right-0 pt-5 px-0.5 mx-auto w-[91%] bg-green-100  flex gap-4 "
    >
      <input
        className="w-[88%] border border-green-500 rounded pl-2 py-1 outline-none"
        type="text"
        placeholder="write your task "
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="border min-w-[10%] rounded bg-green-500 text-white py-1 text-sm"
      >
        add
      </button>
    </form>
  );
}

export default AddTodo;
