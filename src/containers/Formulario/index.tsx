import { Form } from 'react-router-dom'
import { ButtonSave, Campo, ContainerMain, Titulo } from '../../styles'
import { Opcoes } from './styles'
import { FormEvent, useState } from 'react'
import * as enums from '../../utils/enums/Tarefa'
import { useDispatch } from 'react-redux'
import Tarefa from '../../models/Tarefa'
import { cadastar } from '../../store/reducers/tarefas'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastraTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    const tarefaParaAdicionar = new Tarefa(
      titulo,
      prioridade,
      enums.Status.PENDENTE,
      descricao,
      9
    )
    dispatch(cadastar(tarefaParaAdicionar))
    navigate('/')
  }

  return (
    <ContainerMain>
      <Titulo>Nova tarefa</Titulo>
      <Form onSubmit={cadastraTarefa}>
        <Campo
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título"
        />
        <Campo
          as="textarea"
          id=""
          placeholder="Descriação da tarefa"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />{' '}
        <Opcoes>
          <p>Prioridade</p>
          <input
            value={enums.Prioridade.URGENTE}
            type="radio"
            name={prioridade}
            id="urgente"
            onChange={(e) => setPrioridade(e.target.value as enums.Prioridade)}
          />{' '}
          <label htmlFor="urgente">Urgente</label>
          <input
            value={enums.Prioridade.IMPORTANTE}
            type="radio"
            name={prioridade}
            id="importante"
            onChange={(e) => setPrioridade(e.target.value as enums.Prioridade)}
          />{' '}
          <label htmlFor="importante">Importante</label>
          <input
            value={enums.Prioridade.NORMAL}
            type="radio"
            name={prioridade}
            id="normal"
          />
          <label style={{ marginLeft: '3px' }} htmlFor="normal">
            Normal
          </label>
        </Opcoes>
        <ButtonSave type="submit">Cadastrar</ButtonSave>
      </Form>
    </ContainerMain>
  )
}

export default Formulario
