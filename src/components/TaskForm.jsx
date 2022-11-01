import { useState, useContext, useEffect } from "react";
import TaskContext from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const { addTask, taskEdit, updateTask } = useContext(TaskContext);

  useEffect(() => {
    if (taskEdit.edit === true) {
      setTitle(taskEdit.item.title);
    }
  }, [taskEdit]);

  const handleInputChange = (e) => {
    if (title === "") {
      setMessage(null);
    } else if (title !== "" && title.trim().length <= 10) {
      setMessage("title should be ten characters long");
    } else {
      setMessage(null);
    }

    const today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    setDate(date);
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length > 10) {
      const newTask = {
        title: title,
        date: date,
      };

      if (taskEdit.edit === true) {
        updateTask(taskEdit.item.id, newTask);
      } else {
        addTask(newTask);
        setTitle("");
      }
    }
  };

  return (
    <div className="card space-x-6 ">
      <form onSubmit={handleSubmit}>
        <h2 className="font-bold text-lg mb-6">Create a Task</h2>
        <div className="flex flex-col md:flex-row md:space-x-3">
          <input
            onChange={handleInputChange}
            className="text-sm p-2 px-4 border border-black px-3 md:w-2/3"
            type="text"
            placeholder="Task Title"
            value={title}
          />
          <button
            className="px-5 py-3 text-sm rounded-md bg-black text-white focus:bg-blue-600 duration-500 "
            type="submit"
          >
            Create
          </button>
        </div>

        {message && <div className="text-sm text-center mt-6">{message}</div>}
      </form>
    </div>
  );
}

export default TaskForm;
