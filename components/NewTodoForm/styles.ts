import styled from 'styled-components'

const baseStyles = `
  padding: 0.5rem;
  font-weight: bold;
  position: relative;
`

const pseudoElementStyles = `
  content: '';
  position: absolute;
  background-color: #ff3373;
  top: 8px;
  left: 8px;
  right: -8px;
  bottom: -8px; 
  z-index: -1;
  transition: top 0.3s ease, left 0.3s ease, right 0.3s ease, bottom 0.3s ease;
`

export const Button = styled.button`
  background-color: #daff00;
  border: 2px solid #daff00;
  color: #ff3373;
  ${baseStyles}

  &:after {
    ${pseudoElementStyles}
  }

  &:hover {
    &:after {
      top: 12px;
      left: 12px;
      right: -12px;
      bottom: -12px;
    }
  }
`

export const InputWrapper = styled.div`
  position: relative;

  &:after {
    ${pseudoElementStyles}
  }

  &:hover {
    &:after {
      top: 12px;
      left: 12px;
      right: -10px;
      bottom: -12px;
    }
  }
`

export const Input = styled.input`
  width: 100%;
  background-color: white;
  border: 2px solid #ff3373;
  color: #242e4f;
  outline: none;
  ${baseStyles}
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`
