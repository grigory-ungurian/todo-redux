import { createRoot } from "react-dom/client";
import { configureStore } from "./store";
import { createGlobalStyle } from "styled-components";

import { Root } from "./Root";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background-color: #141414;
  color: #dee8fd;
}
`;

const store = configureStore();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <Global />
    <Root store={store} />
  </>
);
