import * as S from './styles'
import Tarefas from '../../components/Tarefas'
import * as enums from '../../utils/enums/tarefa'

const listaDeTarefas = [
  {
    titulo: 'Terminar o curso da Ebac de Engenheiro Front-End',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENNTE,
    descricao: 'Fazer os projetos finais e curso de mentoria de carreira'
  },
  {
    titulo: 'Juntar dinheiro para pagar o curso da Ebac',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENNTE,
    descricao:
      'Trabalhar neste próximo final de semana sabado e domingo e juntar 230 reais '
  },
  {
    titulo: 'Camisas e perfumes comprados mês de agosto',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.CONCLUIDA,
    descricao: 'Aquele investiment pessoal necessário'
  },
  {
    titulo: 'Arrumar oq tiver que arrumar no carro até dezembro de 2024',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENNTE,
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
