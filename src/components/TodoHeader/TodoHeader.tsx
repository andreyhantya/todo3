import React from "react";
import {HeaderWrapper, StyledButton, StyledInput} from "./StyledHeader";


interface ITodoHeaderProps {
    addTask: () => void
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TodoHeader = ({addTask, changeHandler }: ITodoHeaderProps):  JSX.Element => (
        <HeaderWrapper>
            <StyledInput
                type='text'
                placeholder='Type task'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e)}
            />
            <StyledButton onClick={addTask}>Add task</StyledButton>
        </HeaderWrapper>
)

export default TodoHeader;