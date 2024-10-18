import styled from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  color: #666;
  font-weight: 700;

  label {
    color: #666 !important;
    font-weight: 700 !important;
  }

  textarea {
    resize: none !important;
    margin: 16px 0;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
    color: #666;
    font-weight: 700;
    margin-left: 6px;
  }

  label {
    color: #666;
    font-weight: 700;
    margin-right: 6px;
  }

  input {
    margin-right: 1px;
  }

  input:last-of-type {
    margin-right: 1px;
    color: red;
    background-color: red;
  }
`
