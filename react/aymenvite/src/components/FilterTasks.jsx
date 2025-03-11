import { useDispatch } from "react-redux";
import { setFilter } from "../features/tasks/taskSlice";

const FilterTasks = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setFilter("all"))}>All</button>
      <button onClick={() => dispatch(setFilter("done"))}>Done</button>
      <button onClick={() => dispatch(setFilter("notDone"))}>Not Done</button>
    </div>
  );
};

export default FilterTasks;
