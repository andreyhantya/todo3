import React from "react";
import { TodoList, TodosWrapper} from "./StyledTodos";
import Todo from "./Todo/Todo";
import {ITodo} from "../../interfaces";

interface ITodosProps {
    todoInfo: ITodo[],
    deletedTask(id: number): void
}

const Todos = ({todoInfo, deletedTask}: ITodosProps): JSX.Element => {
    return (
        <TodosWrapper>
          <TodoList>
              {todoInfo ? todoInfo.map((todo, idx) => (
                  <Todo
                      key={todo.id}
                      title={todo.title}
                      idx={idx + 1}
                      id={todo.id}
                      isCompleted={todo.isCompleted}
                      deletedTask={(id: number) => deletedTask(id)}
                  />
              )) : null}
          </TodoList>
        </TodosWrapper>
    )
}

export default Todos;