import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  remover,
  editar,
  alteraStatus,
  alteraPrioridade
} from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { Button, ButtonSave, Descricao } from '../../styles'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'

type Props = TarefaClass

const Tarefas = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()

  const [editarTarefa, setEditarTarefa] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setDescricao(descricaoOriginal)
    setEditarTarefa(false)
  }

  function editandoTarefa() {
    dispatch(
      editar({
        descricao,
        id,
        status,
        prioridade,
        titulo
      })
    )
    setEditarTarefa(false)
  }

  function alterarStatusTarefa(event: ChangeEvent<HTMLInputElement>) {
    dispatch(alteraStatus({ id, finalizado: event.target.checked }))
  }

  function alterarPrioridadeTarefa(event: ChangeEvent<HTMLSelectElement>) {
    const novaPrioridade = event.target.value as enums.Prioridade
    dispatch(alteraPrioridade({ id, prioridade: novaPrioridade }))
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alterarStatusTarefa}
        />
        <S.Titulo>
          {editarTarefa && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag $prioridade={prioridade}>{prioridade}</S.Tag>
      <S.Tag $status={status}>{status}</S.Tag>
      <Descricao
        disabled={!editarTarefa}
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      {editarTarefa && (
        <S.AlterarPrioridade>
          <p>Alterar prioridade: </p>
          <select value={prioridade} onChange={alterarPrioridadeTarefa}>
            {Object.values(enums.Prioridade).map((opcao) => (
              <option key={opcao} value={opcao}>
                {opcao}
              </option>
            ))}
          </select>
        </S.AlterarPrioridade>
      )}

      <S.BarraAcoes>
        {editarTarefa ? (
          <>
            <ButtonSave onClick={editandoTarefa}>Salvar</ButtonSave>
            <S.ButtonRed onClick={cancelarEdicao}>Cancelar</S.ButtonRed>
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                setEditarTarefa(true)
              }}
            >
              Editar
            </Button>
            <S.ButtonRed onClick={() => dispatch(remover(id))}>
              Remover
            </S.ButtonRed>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefas
