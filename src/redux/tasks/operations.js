import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/operations";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get("/tasks");
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const addTasks = createAsyncThunk(
  "tasks/addTask",
  async (text, thunkApi) => {
    try {
      const { data } = await instance.post("/tasks", { content: text });
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const deleteTasks = createAsyncThunk(
  "tasks/deleteTask",
  async (id, thunkApi) => {
    try {
      const { data } = await instance.delete(`/tasks/${id}`);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
