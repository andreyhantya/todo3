import React from "react";
import {TodoWrapper, DeleteButton, DoneButton, TodoTitle, ButtonsWrapper} from "./StyledTodo";
import {ITodo} from "../../../interfaces";

interface ITodoPops {
    idx: number,
    title: ITodo['title'],
    isCompleted: ITodo['isCompleted'],
    id: ITodo['id'],
    onTaskDelete(id: ITodo['id']): void,
    onTaskComplete(id: ITodo['id']): void,
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