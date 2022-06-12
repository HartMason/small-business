import React from "react";
import "./App.css";
import ButtonAppBar from "./containers/Navigation";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <Provider store={store}>
      <ButtonAppBar />
      <main style={{ display: "flex" }}>
        <Router />
      </main>
    </Provider>
  );
}

export default App;
