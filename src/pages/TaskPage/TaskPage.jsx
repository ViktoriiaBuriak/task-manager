// import { useDispatch } from "react-redux";
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList";
// import { useEffect } from "react";
// import { fetchTasks } from "../../redux/tasks/operations";

const TaskPages = () => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchTasks())
  // },[dispatch])
  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  );
};

export default TaskPages;
