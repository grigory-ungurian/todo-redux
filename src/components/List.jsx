import { useSelector } from "react-redux";
import styled from "styled-components";
import { allTodos } from "../store/selectors/todos-selectors";
import Item from "./Item";

const StyledList = styled.ul`
  padding: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.empty ? "center" : "stretch")};
  row-gap: 10px;
`;

const StyledEmptyStateMessage = styled.li`
  margin-top: 5px;
  color: #99a3be;
`;

export default function List() {
  const todos = useSelector(allTodos);

  if (todos.length === 0) {
    return (
      <StyledList empty={todos.length === 0}>
        <StyledEmptyStateMessage>Пока нет записей</StyledEmptyStateMessage>
      </StyledList>
    );
  }

  return (
    <StyledList>
      {todos.map((todo) => (
        <Item key={todo.id} {...todo} />
      ))}
    </StyledList>
  );
}
