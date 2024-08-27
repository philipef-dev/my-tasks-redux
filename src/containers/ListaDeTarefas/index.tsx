import * as S from './styles'
import Tarefas from '../../components/Tarefas'
import * as enums from '../../utils/enums/tarefa'

const listaDeTarefas = [
  {
    titulo: 'Terminar o teste tecnico da LiveCode',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE,
    descricao:
      'Realizar o teste utilizaando redux para controle de estados e stylede componenets para estilização.'
  },
  {
    titulo: 'Finalizar o Resumo da aula sobre Redux',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE,
    descricao: 'Assistir a aulas novamento e fazendo  anotações'
  },
  {
    titulo: 'Camisas e perfumes comprados no mês de agosto',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.CONCLUIDA,
    descricao: 'Aquele investiment pessoal necessário'
  },
  {
    titulo: 'Arrumar oq tiver que arrumar no carro até dezembro de 2024',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE,
    descricao: 'Deixar o carro pronto para venda se possível'
  }
]

const ListaDeTarefas = () => {
  return (
    <S.Container>
      <S.Titulo>
        2 tarefas marcadas como: &quot; todas &quot; e &quot; termo &quot;
      </S.Titulo>
      <S.ListaDeTarefas>
        <ul>
          {listaDeTarefas.map((t) => (
            <li key={t.titulo}>
              <Tarefas
                titulo={t.titulo}
                status={t.status}
                descricao={t.descricao}
                prioridade={t.prioridade}
              />
            </li>
          ))}
        </ul>
      </S.ListaDeTarefas>
    </S.Container>
  )
}

export default ListaDeTarefas
