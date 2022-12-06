import React, { useEffect } from "react";
import PostContainer from "./components/PostContainer";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/ActionCreator";
import { userSlice } from "./store/reducers/UserSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      <PostContainer />
    </div>
  );
}

export default App;
