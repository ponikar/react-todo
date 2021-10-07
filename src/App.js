import { Provider } from "react-redux";
import "./App.css";
import { NewTodo } from "./components/todos/new-todo";
import { TodosCollection } from "./components/todos/todo-collection";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <section className="container">
        <h2> Todo App </h2>
        <NewTodo />
        <TodosCollection />
      </section>
    </Provider>
  );
}

export default App;
