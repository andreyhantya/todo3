import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  height: 800px;
  border: 1px solid #797979;
  background-color: #f1f1f1;
  margin: 0 auto;
  border-radius: 5px;
  overflow-x: hidden;
`

export const HeaderWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`

export const StyledInput = styled.input`
  height: 50px;
  font-size: 25px;
`;

export const StyledButton = styled.button`
  height: 50px;
  background-color: #5ab0ff;
  border-radius: 5px;
  outline: none;
  border: 1px solid #9c9c9c;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`