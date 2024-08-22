import styled from 'styled-components'

export const Card = styled.div`
  padding: 16px;
  background: #fcfcfc;
  box-shadow: 0px 4px 4px 0px #00000040;
  margin-bottom: 32px;
  border-radius: 0px 0px 16px 16px;
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 14px;
`
export const Span = styled.span`
  padding: 4px 8px;
  border-radius: 8px;
  background-color: #e1a32a;
  font-size: 10px;
  font-weight: 700;
  margin-right: 16px;
  color: #fff;
  display: inline-block;
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

export const BarraAcoes = styled.div`
  border-top: 1px solid #fcfcfc;
  border-radius: 0px 0px 16px 16px;
  padding: 16px 16px 0px 0px;
`

export const Button = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 700;
  border: none;
  font-size: 12px;
  background: #c23616;
  margin-right: 8px;
  color: #fff;
  cursor: pointer;
`
