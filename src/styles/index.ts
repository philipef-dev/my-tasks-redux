import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
   }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ContainerMain = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Descricao = styled.textarea`
  display: block;
  width: 100%;
  padding: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  border: none;
  font-size: 'Roboto Mono', monospace;
  resize: none;
  margin-top: 16px;
  margin-bottom: 16px;
  color: #8b8b8b;
`

export const Campo = styled.input`
  border-radius: 8px;
  border: 1px solid #666;
  color: #666;
  font-weight: 700;
  font-size: 14px;
  padding: 8px;
  margin-bottom: 16px;
  width: 100%;
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 40px;
  margin-top: 40px;
`

export const Button = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 700;
  border: none;
  font-size: 12px;
  background: #2f3640;
  margin-right: 8px;
  color: #fff;
  cursor: pointer;
`

export const ButtonSave = styled(Button)`
  background-color: ${variaveis.green};
`

export default GlobalStyle
