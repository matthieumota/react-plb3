import { configureStore, createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',

  // Les données
  initialState: [
    { id: 1, name: 'Faire les courses', done: false },
    { id: 2, name: 'Travailler', done: true },
    { id: 3, name: 'Surveiller Fiorella', done: true },
  ],

  // Les actions sur ces données
  reducers: {
    toggleTodo: (state, action) => {
      // { type: 'todo/toggleTodo', payload: 20 }
      const todo = state.find(t => t.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    deleteTodo: (state, action) => {
      // { type: 'todo/deleteTodo', payload: 20 }
      return state.filter(t => t.id !== action.payload);
    },
  },
})

// Actions
export const { toggleTodo, deleteTodo } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  },
})
