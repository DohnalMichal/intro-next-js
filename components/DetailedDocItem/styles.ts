import styled from 'styled-components'

export const Root = styled.div`
  background-color: white;
  border: 2px solid #ff3373;
  padding: 1rem;
  font-weight: bold;
  font-size: 1rem;
  position: relative;
  color: #ff3373;

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
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding-bottom: 0.25rem;
`

export const Path = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background-color: #f3f4f6;
`

export const Method = styled.span`
  color: #c8a304;
`

export const Details = styled.p`
  font-weight: normal;
`
