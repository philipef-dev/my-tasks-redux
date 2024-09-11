import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

const BotaoAdicionar = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/cadastrar')
  }
  return (
    <S.Botao onClick={handleClick}>
      {' '}
      <FaPlus size={25} />{' '}
    </S.Botao>
  )
}

export default BotaoAdicionar
