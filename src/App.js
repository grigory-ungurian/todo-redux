import styled from "styled-components";
import AddTask from "./components/AddTask";
import List from "./components/List";
import TaskFilter from "./components/TaskFilter";

const AppWrapper = styled.div`
  width: 476px;
  min-height: 200px;
  background-color: #edf3ff;
  border-radius: 10px;
  overflow: hidden;
`;

export default function App() {
  return (
    <AppWrapper>
      <AddTask />
      <List />
      <TaskFilter />
    </AppWrapper>
  );
}
