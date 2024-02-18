import styled from 'styled-components'

export const Todo = styled.div<{ completed: boolean }>`
  background-color: white;
  border: 2px solid #ff3373;
  padding: 1rem;
  font-weight: bold;
  font-size: 1rem;
  position: relative;
  color: #ff3373;

  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};

  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    background-color: #ff3373;
    top: 8px;
    left: 8px;
    right: -8px;
    bottom: -8px;
    z-index: -1;
    transition: top 0.3s ease, left 0.3s ease, right 0.3s ease, bottom 0.3s ease; /* Added transition effect to positioning */
  }

  &:hover {
    background-color: #f5f5f5;
    color: #242e4f;

    &:after {
      top: 12px;
      left: 12px;
      right: -12px;
      bottom: -12px;
    }
  }
`

export const Text = styled.span`
  color: #242e4f;
`
