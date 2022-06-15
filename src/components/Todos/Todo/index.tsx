import React from "react";
import {TodoWrapper, DeleteButton, DoneButton, TodoTitle, ButtonsWrapper} from "./StyledTodo";

interface ITodoPops {
    idx: number,
    title: string,
    isCompleted: boolean,
    id: number,
    onTaskDelete(id: number): void,
    onTaskComplete(id: number): void,
}

const Todo = ({idx, title, onTaskComplete,isCompleted, onTaskDelete, id}: ITodoPops): JSX.Element => (
    <TodoWrapper>
        <strong>{idx} )</strong>
        <TodoTitle isDone={isCompleted}>{title}</TodoTitle>
        <ButtonsWrapper>
            <DoneButton onClick={() => onTaskComplete(id)}>Done</DoneButton>
            <DeleteButton onClick={() => onTaskDelete(id)}>Del</DeleteButton>
        </ButtonsWrapper>
    </TodoWrapper>
)

export default Todo;