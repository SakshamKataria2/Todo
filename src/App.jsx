import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prv) => [{ id: Date.now(), ...todo }, ...prv]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prv) =>
      prv.map((prvTodo) => (prvTodo.id === id ? todo : prvTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prv) => prv.filter((prvTodo) => prvTodo.id != id));
  };

  const toggleComplete = (id) => {
    setTodos((prv) =>
      prv.map((prvTodo) =>
        prvTodo.id === id
          ? { ...prvTodo, completed: !prvTodo.completed }
          : prvTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div>
        <Navbar />
        <TodoProvider
          value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
        >
          <div className=" min-h-screen py-8">
            <div className="w-full max-w-2xl mx-auto  rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                Manage Your Todos
              </h1>
              <div className="mb-4">
                {/* Todo form goes here */}
                <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
                {todos.map((todo) => (
                  <div key={todo.id} className="w-full">
                    <TodoItem todo={todo} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TodoProvider>
      </div>
    </>
  );
}

export default App;
