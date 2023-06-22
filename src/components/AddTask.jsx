import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos/todos-actions";
import styled from "styled-components";

const StyledAddTask = styled.form`
  padding: 18px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #5685f0;
  border-bottom: 1px solid #4570d3;
`;

const StyledTaskAddField = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  color: #dee8fd;
  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 31px;
    color: #b1c7f9;
  }
  &:focus {
    outline: none;
  }
`;

const StyledSubmit = styled.button`
  padding: 7px 12px;
  background-color: #4570d3;
  border: 1px solid #3a5aa3;
  border-radius: 10px;
  color: #dee8fd;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    background-color: #3a5aa3;
  }
`;

export default function AddTask() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.title.value !== "") {
      dispatch(addTodo(event.target.title.value));
      event.target.reset();
    }
  };

  return (
    <StyledAddTask onSubmit={handleSubmit}>
      <StyledTaskAddField placeholder="Название продукта" name="title" />
      <StyledSubmit>Добавить</StyledSubmit>
    </StyledAddTask>
  );
}
