"use client";
import React, { useState } from "react";

const page = () => {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submtHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { Title, Desc }]);
    setTitle("");
    setDesc("");
  };
  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };

  let renderTasks = <h2>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTasks = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex items-center justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-semibold">{t.Title}</h5>
            <h6 className="text-lg font-medium">{t.Desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 text-white px-4 py-2 rounded font-bold "
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        My Todo List
      </h1>
      <form onSubmit={submtHandler}>
        <input
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
          placeholder="Enter Task Title Here"
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
          placeholder="Enter Task Description Here"
          value={Desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTasks}</ul>
      </div>
    </>
  );
};

export default page;
