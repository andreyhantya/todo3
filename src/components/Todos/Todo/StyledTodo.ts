import styled from "styled-components";
type TexDec = {
    isDone: boolean
}

export const TodoWrapper = styled.li`
  margin: 5px;
  padding: 10px;
  border: 1px solid #4c4c4c;
  list-style: none;
  border-radius: 5px;
  background-color: #eccc88;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TodoTitle = styled.div<TexDec>`
  text-decoration:  ${props => props.isDone ? 'line-through' : 'none'};
  text-align: left;
  font-size: 20px;
`

export const ButtonsWrapper = styled.div`
`

const StyledButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid gray;
    text-transform: uppercase;
    cursor: pointer;
`;

export const DoneButton = styled(StyledButton)`
  background-color: #6be26b;

  &:hover {
    background-color: #478d47;
  }
`

export const DeleteButton = styled(StyledButton)`
  background-color: #f56e6e;

  &:hover {
    background-color: #f84040;
  }
`