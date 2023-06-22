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
  color: ${({ active }) => (active ? "#303744" : "#99a3be")};
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #303744;
  }
`;

export default function TaskFilter() {
  return (
    <StyledTaskFilterList>
      <StyledTaskFilterItem active={true}>Все</StyledTaskFilterItem>
      <StyledTaskFilterItem>Активные</StyledTaskFilterItem>
      <StyledTaskFilterItem>Завершенные</StyledTaskFilterItem>
    </StyledTaskFilterList>
  );
}
