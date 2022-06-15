import React, { useState } from "react";
import { Wrapper } from "./StyledApp";
import Todos from "./components/Todos/Todos";
import {ITodo} from "./interfaces";
import TodoHeader from "./components/TodoHeader/TodoHeader";



const App = (): JSX.Element => {
  const [data, setData] = useState<ITodo[] | []>([]);
  const [taskTitle, setTaskTitle] = useState('');

  const addTask = () => {
    const newTask: ITodo = {
      id: Date.now(),
      title: taskTitle,
      isCompleted: false
    };
    setData([newTask , ...data])
  }

  const deleteTask = (id: number) => {
    return setData(prev => prev.filter((elem) => elem.id !== id ));
  }

  return (
      <div className="App">
        <Wrapper>
          <TodoHeader
              changeHandler={(e: React.ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value)}
              addTask={addTask}
          />

          <Todos
              todoInfo={data}
              deletedTask={(id) => deleteTask(id)}
          />
        </Wrapper>
      </div>
  );
}

export default App;
