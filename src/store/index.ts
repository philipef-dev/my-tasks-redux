import { configureStore } from '@reduxjs/toolkit'
import tarefasReducers from './reducers/tarefa'

export const store = configureStore({
  reducer: {
    tarefa: tarefasReducers
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
