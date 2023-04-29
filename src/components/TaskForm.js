import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.taskId) {
      dispatch(
        updateTask({
          ...task,
          id: params.taskId,
        })
      );
      return navigate("/");
    }

    dispatch(
      addTask({
        ...task,
        id: uuid(),
      })
    );
    navigate("/");
  };

  useEffect(() => {
    if (params.taskId) {
      setTask(tasks.find((task) => task.id === params.taskId));
    }
  }, [params.taskId, tasks]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="title"
        type="text"
        placeholder="Enter task"
        value={task.title}
      />

      <textarea
        onChange={handleChange}
        name="description"
        placeholder="Enter description"
        value={task.description}
      />

      <button>Add</button>
    </form>
  );
}

export default TaskForm;
