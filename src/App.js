import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/usersSlice";
import UserList from "./components/UserList";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
};

export default App;
