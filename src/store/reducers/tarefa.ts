import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/tarefa'

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Terminar o teste tecnico da LiveCode',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Realizar o teste utilizaando redux para controle de estados e stylede componenets para estilização.',
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
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefaSlice.actions
export default tarefaSlice.reducer
