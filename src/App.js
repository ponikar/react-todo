import "./App.css";
import { NewTodo } from "./components/todos/new-todo";
import { TodosCollection } from "./components/todos/todo-collection";
import { TodoProvider } from "./contexts/todos-context";

function App() {
  return (
    <TodoProvider>
      <NewTodo />
      <TodosCollection />
    </TodoProvider>
  );
}

export default App;
