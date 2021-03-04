import "normalize.css";
import "./App.css";

import Pomodoro from "./components/Pomodoro";
import TodoList from "./components/TodoList";

function App() {
  // const sequence = ["p", "s", "p", "s", "p", "s", "p", "l"];
  return (
    <div className="container">
      <TodoList />
      <Pomodoro />
    </div>
  );
}

export default App;
