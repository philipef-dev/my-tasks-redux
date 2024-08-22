import * as S from './styles'
import Tarefas from '../../components/Tarefas'

const listaDeTarefas = [
  {
    titulo: 'Terminar o curso da Ebac de Engenheiro Front-End',
    prioridade: 'pendente',
    status: 'importante',
    descricao: 'Fazer os projetos finais e curso de mentoria de carreira'
  },
  {
    titulo: 'Juntar dinheiro para pagar o curso da Ebac',
    prioridade: 'pendente',
    status: 'concluído',
    descricao:
      'Trabalhar neste próximo final de semana sabado e domingo e juntar 230 reais '
  },
  {
    titulo: 'Camisas e perfumes comprados mês de agosto',
    prioridade: 'normal',
    status: 'concluído',
    descricao: 'Fazer os projetos finais e curso de mentoria de carreira'
  },
  {
    titulo: 'Juntar dinheiro para pagar o curso da Ebac',
    prioridade: 'pendente',
    status: 'importante',
    descricao: 'Fazer os projetos finais do curso e da mentoria de carreira'
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
