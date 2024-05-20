// import { createSlice } from "@reduxjs/toolkit";
// import { addTasks, deleteTasks, fetchTasks } from "./operations";

import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//   items: [],
//   loading: false,
//   error: null,
// };

// const handlePending = (state) => {
//   state.loading = true;
//   state.error = null;
// };

// const handleRejected = (state, action) => {
//   state.loading = false;
//   state.error = action.payload;
// };

// const taskSlice = createSlice({
//   name: "tasks",
//   initialState: initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTasks.pending, handlePending)
//       .addCase(fetchTasks.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchTasks.rejected, handleRejected)
//       // Add
//       .addCase(addTasks.pending, handlePending)
//       .addCase(addTasks.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = [...state.items, action.payload];
//       })
//       .addCase(addTasks.rejected, handleRejected)
//       // Delete
//       .addCase(deleteTasks.pending, handlePending)
//       .addCase(deleteTasks.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = state.items.filter((item) => item.id !== action.payload.id);
//       })
//       .addCase(deleteTasks.rejected, handleRejected);
//   },
// });

// export default taskSlice.reducer;

const initialState = {
  items: []
}

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter(item => item.id!== action.payload)
    }
  }
})

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
