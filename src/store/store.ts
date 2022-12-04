import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";


const rootState = combineReducers({
    userReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootState
    })
}

export type RootState = ReturnType<typeof rootState>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]