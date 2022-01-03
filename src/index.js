import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Table from "./Table";

import { Provider } from "react-redux";
import store from "./store";

import "./styles.css";

const RootApp = () => {
  return (
    <div className={"root"}>
      <Table />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <RootApp />
    </Provider>
  </StrictMode>,
  rootElement
);
