import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreator";
import { userSlice } from "./store/reducers/UserSlice";

function App() {
  const dispatch = useAppDispatch();
  const { error, isLoading, users } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default App;
