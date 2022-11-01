import TaskItem from "./TaskItem";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TaskContext from "../context/TaskContext";
import Spinner from "./Shared/Spinner";

function TrackerList() {
  const { task, isLoading } = useContext(TaskContext);

  if (!isLoading && (!task || task.length === 0)) {
    return (
      <p className="text-lg font-bold card">There are no task to complete</p>
    );
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="m-6">
      <AnimatePresence>
        {task.map((item) => (
          <motion.div
            key={item.task_id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TaskItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div className="m-6">
  //     {task.map((item) => (
  //       <TaskItem
  //         key={item.id}
  //         item={item}
  //         handleDelete={(id) => handleDelete(id)}
  //       />
  //     ))}
  //   </div>
  // );
}

export default TrackerList;
