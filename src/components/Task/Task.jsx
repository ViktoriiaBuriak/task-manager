import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasks/slice";

const Task = ({ task: { text, id } }) => {
  const dispatch = useDispatch();
  const onDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };
  return (
    <div>
      <p>{text}</p>
      <button onClick={() => onDeleteTask(id)}>Delete</button>
    </div>
  );
};

export default Task;
