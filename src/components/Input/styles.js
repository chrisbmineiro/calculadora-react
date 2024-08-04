import styled from 'styled-components';

export const InputContainer = styled.div `
  width: 100%;
  height: 75px;
  background-color: #6482AD;
  border-radius: 10px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  input {
    background-color: transparent;
    border: none;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    font-size: 30px;
    color: #F5EDED;
    text-align: right;
  }
`;