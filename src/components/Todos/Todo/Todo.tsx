import React, { useState  } from "react";
import {TodoWrapper, DeleteButton, DoneButton, TodoTitle, ButtonsWrapper} from "./StyledTodo";

interface ITodoPops {
    idx: number,
    title: string,
    isCompleted: boolean,
    id: number,
    deletedTask(id: number): void,
}

const Todo = ({idx, title, isCompleted, deletedTask, id}: ITodoPops): JSX.Element => {
    const [todoIsCompleted, setTodoIsCompleted] = useState(isCompleted);

    const completedTask = () => {
        return setTodoIsCompleted(!todoIsCompleted)
    }

    return (
        <>
            <TodoWrapper>
                <strong>{idx})</strong>
                <TodoTitle isDone={todoIsCompleted}>{title}</TodoTitle>
                <ButtonsWrapper>
                    <DoneButton onClick={() => completedTask()}>Done</DoneButton>
                    <DeleteButton onClick={() => deletedTask(id)}>Del</DeleteButton>
                </ButtonsWrapper>
            </TodoWrapper>
        </>
    )
}

export default Todo;