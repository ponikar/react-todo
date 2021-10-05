import "./App.css";
import { NewTodo } from "./components/todos/new-todo";
import { TodosCollection } from "./components/todos/todo-collection";
import { TodoProvider } from "./contexts/todos-context";

function App() {
  return (
    <section className="container">
      <TodoProvider>
        <h2> Todo App </h2>
        <NewTodo />
        <TodosCollection />
      </TodoProvider>
    </section>
  );
}

export default App;
