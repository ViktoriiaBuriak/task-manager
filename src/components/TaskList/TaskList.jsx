import { useSelector } from "react-redux";
import Task from "../Task/Task";
import { selectTasks } from "../../redux/tasks/selectors";

const TaskList = () => {
  const getTasks = useSelector(selectTasks);
  return (
    <ul>
      {getTasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
