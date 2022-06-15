import React from "react";
import { TodoList, TodosWrapper} from "./StyledTodos";
import Todo from "./Todo";
import {ITodo} from "../../interfaces";

interface ITodosProps {
    todoInfo: ITodo[],
    onTaskDelete(id: number): void,
    onTaskComplete(id: number): void
}

const Todos = ({ todoInfo, onTaskDelete, onTaskComplete }: ITodosProps): JSX.Element => (
        <TodosWrapper>
          <TodoList>
              { todoInfo.map((todo, idx) => (
                  <Todo
                      onTaskComplete={onTaskComplete}
                      key={todo.id}
                      title={todo.title}
                      idx={idx + 1}
                      id={todo.id}
                      isCompleted={todo.isCompleted}
                      onTaskDelete={onTaskDelete}
                  />
              ))}
          </TodoList>
        </TodosWrapper>
)


export default Todos;