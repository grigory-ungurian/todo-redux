import { useSelector, useDispatch } from "react-redux";
import { selectActiveFilter } from "../store/filters/filters-selectors";
import { setFilter } from "../store/filters/filters-actions";
import styled from "styled-components";

const StyledTaskFilterList = styled.ul`
  padding: 18px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  border-top: 1px solid #c7d0e8;
  list-style: none;
`;

const StyledTaskFilterItem = styled.li`
  color: ${({ activeFilter }) => (activeFilter ? "#303744" : "#99a3be")};
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #303744;
  }
`;

export default function TaskFilter() {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);
  return (
    <StyledTaskFilterList>
      <StyledTaskFilterItem
        activeFilter={activeFilter === "all" ? true : false}
        onClick={() => dispatch(setFilter("all"))}
      >
        Все
      </StyledTaskFilterItem>
      <StyledTaskFilterItem
        activeFilter={activeFilter === "active" ? true : false}
        onClick={() => dispatch(setFilter("active"))}
      >
        Активные
      </StyledTaskFilterItem>
      <StyledTaskFilterItem
        activeFilter={activeFilter === "completed" ? true : false}
        onClick={() => dispatch(setFilter("completed"))}
      >
        Завершенные
      </StyledTaskFilterItem>
    </StyledTaskFilterList>
  );
}
