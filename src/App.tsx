import React, { useState } from "react";
import { Wrapper } from "./StyledApp";
import Todos from "./components/Todos";
import {ITodo} from "./interfaces";
import TodoHeader from "./components/TodoHeader";

const App = (): JSX.Element => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTask = (taskTitle: ITodo['title']) => {
    const newTodo: ITodo = {
      id: Date.now(),
      title: taskTitle,
      isCompleted: false
    };
    setTodos([newTodo , ...todos])
  }

  const onTaskComplete = (id: ITodo['id']) => {
    const newTodos = todos.map((elem) => (
       elem.id === id
          ? { ...elem, isCompleted: !elem.isCompleted }
          : elem
    ));

    setTodos(newTodos)
  }

  const onTaskDelete = (id: ITodo['id']) => {
    return setTodos(prev => prev.filter((todo) => todo.id !== id ));
  }

  return (
        <Wrapper>
          <TodoHeader
              addTask={addTask}
          />
          <Todos
              onTaskComplete={onTaskComplete}
              todoInfo={todos}
              onTaskDelete={onTaskDelete}
          />
        </Wrapper>
  );
}

export default App;
