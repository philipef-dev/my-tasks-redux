import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
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
