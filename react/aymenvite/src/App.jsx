import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import FilterTasks from "./components/FilterTasks";

const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <AddTask />
      <FilterTasks />
      <ListTask />
    </div>
  );
};

export default App;
