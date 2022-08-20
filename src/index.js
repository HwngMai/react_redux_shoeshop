import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer_DemoReduxMini } from "./DemoReduxMini/redux/reducers/rootReducer";
import { rootReducer_ShoeShop } from "./Ex_ShoeShopRedux/redux/reducers/rootReducer";
import { rootReducer_XucXac } from "./Ex_Tai_Xiu/redux/Reducer/rootReducer";

let store = createStore(
  rootReducer_XucXac,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
