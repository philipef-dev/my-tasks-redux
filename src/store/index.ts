import { configureStore } from '@reduxjs/toolkit'
import tarefasReducers from './reducers/tarefas'
import filtroReducers from './reducers/filtro'

export const store = configureStore({
  reducer: {
    tarefas: tarefasReducers,
    filtro: filtroReducers
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
