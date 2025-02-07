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
    addTodo: (state, action) => {
      // { type: 'todo/addTodo', payload: 'Faire le projet' }
      const newTodo = { ...action.payload, id: Date.now(), done: false };

      // On peut modifier le state directement grâce à Redux
      // state.push(newTodo);
      return [ ...state, newTodo ];
    },
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

  selectors: {
    completedTodos: (state: any) => state.filter((t: any) => t.done),
  }
})

// Actions
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions

// Selectors
export const { completedTodos } = todoSlice.selectors

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  },
})
