import { Form } from 'react-router-dom'
import { ButtonSave, Campo, ContainerMain, Titulo } from '../../styles'
import { Opcoes } from './styles'

const Formulario = () => (
  <ContainerMain>
    <Titulo>Nova tarefa</Titulo>
    <Form>
      <Campo placeholder="Título" />
      <Campo as="textarea" id="" placeholder="Descriação da tarefa" />{' '}
      <Opcoes>
        <p>Prioridade</p>
        <input type="radio" name="prioridade" id="urgente" />{' '}
        <label htmlFor="urgente">Urgente</label>
        <input type="radio" name="prioridade" id="importante" />{' '}
        <label htmlFor="importante">Importante</label>
        <input type="radio" name="prioridade" id="normal" />
        <label htmlFor="normal">Normal</label>
      </Opcoes>
      <ButtonSave type="submit">Cadastrar</ButtonSave>
    </Form>
  </ContainerMain>
)

export default Formulario
