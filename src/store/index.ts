import { configureStore } from '@reduxjs/toolkit'
import tarefasReducers from './reducers/tarefa'
import filtroReducers from './reducers/filtro'

export const store = configureStore({
  reducer: {
    tarefa: tarefasReducers,
    filtro: filtroReducers
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
