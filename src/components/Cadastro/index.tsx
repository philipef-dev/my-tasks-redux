const Cadastro = () => (
  <form>
    <input type="Digite o titulo da nova tarefa" />
    <textarea name="" id="" placeholder="Descriação da tarefa" />{' '}
    <input type="radio" name="prioridade" id="urgente" />{' '}
    <label htmlFor="urgente">Urgente</label>
    <input type="radio" name="prioridade" id="importante" />{' '}
    <label htmlFor="importante">Importante</label>
    <input type="radio" name="prioridade" id="normal" />
    <label htmlFor="normal">Normal</label>
    <button type="submit">Cadastrar</button>
  </form>
)
export default Cadastro
