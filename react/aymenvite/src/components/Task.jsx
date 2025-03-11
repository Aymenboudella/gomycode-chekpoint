import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../features/tasks/taskSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask({ id: task.id, description: newDescription }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span>{task.description}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </div>
  );
};

export default Task;
