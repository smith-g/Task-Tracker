import { createContext, useState, useEffect } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [task, setTask] = useState([]);
  const [taskEdit, setTaskEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchTask();
  }, []);

  //fetch task
  const fetchTask = async () => {
    const response = await fetch(`http://localhost:8080/tasks`);

    const data = await response.json();

    setTask(data);
    setIsLoading(false);
  };

  //set item to be edited
  const editTask = (item) => {
    setTaskEdit({
      item,
      edit: true,
    });
  };

  const updateTask = async (id, upitem) => {
    setTask(
      task.map((item) =>
        item.id === id
          ? {
              ...item,
              ...upitem,
            }
          : item
      )
    );
  };

  //deletes item
  const deleteTask = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`http://localhost:8080/task/${id}`, { method: "DELETE" });
      setTask(task.filter((item) => item.id !== id));
    }
  };

  //add a new task
  const addTask = async (newTask) => {
    const response = await fetch("http://localhost:8080/task/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    const data = await response.json();

    setTask([data, ...task]);
  };

  return (
    <TaskContext.Provider
      value={{
        task,
        taskEdit,
        isLoading,
        deleteTask,
        addTask,
        editTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
