import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardSlice from "./features/cardSlice.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducer = combineReducers({
  card: cardSlice,
});
const persistedreducers = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedreducers,
});

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
