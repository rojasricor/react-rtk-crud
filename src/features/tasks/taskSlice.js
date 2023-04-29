import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 Description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 Description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index] = action.payload;
    },
    deleteTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
