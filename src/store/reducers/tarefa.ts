import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefaState = {
  itens: Tarefa[]
}

const initialState: TarefaState = {
  itens: [
    {
      titulo: 'Terminar o teste tecnico da LiveCode',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao:
        'Realizar o teste utilizando redux para controle de estados e stylede componenets para estilização.',
      id: 1
    },

    {
      titulo: 'Finalizar o Resumo da aula sobre Redux',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: 'Assistir a aulas novamento e fazendo  anotações.',
      id: 2
    },
    {
      titulo: 'Arrumar oq tiver que arrumar no carro até dezembro de 2024',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      descricao:
        'Deixar o carro pronto para venda se possível documento ok, manutenção ok.',
      id: 3
    }
  ]
}

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState,
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
