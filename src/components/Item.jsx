import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../store/actions/todos-actions";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../assets/svg/close.svg";

const StyledItem = styled.li`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 15px;
  background-color: #dce4f8;
  border-radius: 5px;
`;

const StyledCheckBox = styled.input`
  cursor: pointer;
`;

const StyledTask = styled.span`
  flex: 1 0 auto;
  color: ${({ completed }) => (completed ? "#99A3BE" : "#303744")};
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`;

const StyledCloseIcon = styled(CloseIcon)`
  width: 20px;
  height: 20px;
  stroke: #c7d0e8;
  transition: stroke 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    stroke: #99a3be;
  }
`;

export default function Item({ id, title, completed }) {
  const dispatch = useDispatch();

  return (
    <StyledItem>
      <StyledCheckBox
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodo(id))}
      />
      <StyledTask completed={completed}>{title}</StyledTask>
      <StyledCloseIcon onClick={() => dispatch(removeTodo(id))} />
    </StyledItem>
  );
}
