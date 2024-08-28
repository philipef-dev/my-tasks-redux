import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/tarefa'

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState: {
    itens: [
      new Tarefa(
        'Terminar o teste tecnico da LiveCode',
        enums.Prioridade.IMPORTANTE,
        enums.Status.PENDENTE,
        'Realizar o teste utilizando redux para controle de estados e stylede componenets para estilização.',
        1
      ),
      new Tarefa(
        'Finalizar o Resumo da aula sobre Redux',
        enums.Prioridade.IMPORTANTE,
        enums.Status.PENDENTE,
        'Assistir a aulas novamento e fazendo  anotações.',
        2
      ),
      new Tarefa(
        'Arrumar oq tiver que arrumar no carro até dezembro de 2024',
        enums.Prioridade.URGENTE,
        enums.Status.PENDENTE,
        'Deixar o carro pronto para venda se possível documento ok, manutenção ok.',
        3
      )
    ]
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa > 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefaSlice.actions
export default tarefaSlice.reducer
