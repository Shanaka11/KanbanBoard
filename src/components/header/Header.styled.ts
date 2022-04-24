import styled from 'styled-components'

export const HeaderStyled = styled.div`
  display: flex;
`

export const HeaderItem = styled.div`
  width: 300px;
  min-width: 300px;
  height: 40px;
  background-color: #EBECF0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  margin: 0 4px;
  font-weight: bold;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
      margin-right: 0;
  }
`