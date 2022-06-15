import React, {useState} from "react";
import {HeaderWrapper, StyledButton, StyledInput} from "./styles";


interface ITodoHeaderProps {
    addTask: (title: string) => void
}


const TodoHeader = ({ addTask }: ITodoHeaderProps):  JSX.Element => {
    const [taskTitle, setTaskTitle] = useState('');

    return (
        <HeaderWrapper>
            <StyledInput
                type='text'
                placeholder='Type task'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value)}
            />
            <StyledButton onClick={() => addTask(taskTitle)}>Add task</StyledButton>
        </HeaderWrapper>
    )
}

export default TodoHeader;