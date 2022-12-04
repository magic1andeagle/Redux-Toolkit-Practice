import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";

export const fetchUsers = createAsyncThunk(
    "user/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Не удалось загрузить данные")
        }
    }
)