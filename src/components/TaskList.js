import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>Task List {tasks.length}</h1>
        <Link to="/new" className="bg-blue-600 px-2 py-1 rounded-sm text-sm">
          Add Task
        </Link>
      </header>

      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
          <Link to={`/edit/${task.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
