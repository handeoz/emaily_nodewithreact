import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reportWebVitals from "./reportWebVitals";
//import { configureStore } from "reduxjs/toolkit";

import App from "./components/App";
import reducers from "./reducers";

// configureStore = createStore
const store = createStore(() => reducers, {}, applyMiddleware());

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();

// Deprecation notice: ReactDOM.render is no longer supported in React 18
/* 
https://stackoverflow.com/questions/71668256/deprecation-notice-reactdom-render-is-no-longer-supported-in-react-18
*/
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.querySelector("#root")
// );
