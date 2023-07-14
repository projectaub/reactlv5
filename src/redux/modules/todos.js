import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const __getTodos = createAsyncThunk(
  "getTodos",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:4000/todos");

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getTodoThunk = createAsyncThunk(
  "GET_TODO",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/todos/${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postTodos = createAsyncThunk(
  "postTodos",
  async (newTodo, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:4000/todos", newTodo);

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodos = createAsyncThunk(
  "postTodos",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/todos/${payload}`
      );

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todos = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    [__postTodos.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__postTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todos.push(action.payload);
    },
    [__postTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
    [__deleteTodos.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__deleteTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    [__deleteTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
    [__getTodoThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
    },
    [__getTodoThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getTodoThunk.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
