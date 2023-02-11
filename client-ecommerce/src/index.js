// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { Provider } from "react-redux";
// // import { store, persistor } from "./redux/store";
// import {store} from "./redux/store";
// import { PersistGate } from 'redux-persist/integration/react'

// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate loading={null}>
//       <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById("root")
// );
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import store from "./redux/store";
// import { Provider } from "react-redux";

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);