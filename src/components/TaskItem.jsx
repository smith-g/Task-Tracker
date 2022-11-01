import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";

function TaskItem({ item }) {
  const { deleteTask, editTask } = useContext(TaskContext);

  return (
    <>
      <div className="card relative space-y-3 md:space-y-0 md:space-x-6">
        <div className="p-3 text-left">
          <div className="absolute top-2 right-6 flex items-center justify-center w-5 h-5 bg-gray-200 rounded-full md:bg-white md:top-4 ">
            <button className=" hover:cursor-pointer hover:-translate-y-0.5 transition duration-150">
              <FaEdit color="blue" onClick={() => editTask(item)} />
            </button>
            <button
              className="p-1 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150"
              onClick={() => deleteTask(item.task_id)}
            >
              <FaTimes color="blue" />
            </button>
          </div>
          <h2 className="text-xl font-bold ">{item.title}</h2>
          <p className="text-sm"> Created: {item.date}</p>
        </div>
        <div className="justify-center items-center flex">
          <button
            type="submit"
            className="px-5 py-3 text-sm rounded-md bg-black text-white focus:bg-blue-600 duration-500 
             focus:text-white"
          >
            Completed
          </button>
        </div>
      </div>
    </>
  );
}

export default TaskItem;
