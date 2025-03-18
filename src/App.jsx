import { useState } from "react";

const App = () => {
  //{name:"study",id:}
  const [todo, setTodo] = useState([]); //in memory db
  const [task, setTask] = useState(""); //input field

  function handleAddTask() {
    if (task == "") return;
    setTodo([...todo, { name: task, id: crypto.randomUUID() }]);
    setTask("");
  }

  console.log(todo);

  const handleDelete = (index) => {
    const newTodos = todo.filter((t, idx) => idx != index);
    setTodo(newTodos);
  };
  //in memory db
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-5">
      <h1 className="font-bold text-2xl mb-4">Todo List</h1>
      <div className="flex mb-4 gap-2">
        <input
          placeholder="Enter your task"
          className="border rounded-xl p-2 w-64"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        ></input>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-xl"
          onClick={handleAddTask}
        >
          Add task
        </button>
      </div>
      <ul className="w-72">
        {todo.map((t, index) => (
          <li
            key={t.id}
            className="flex justify-between items-center bg-white p-2 rounded shadow mb-2"
          >
            {t.name}
            <button
              className="text-red-600 font-bold"
              onClick={() => handleDelete(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
