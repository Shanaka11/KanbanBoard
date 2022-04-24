import styled from 'styled-components'

export const HeaderStyled = styled.div`
  display: flex;
`

export const HeaderItem = styled.div`
  width: 300px;
  min-width: 300px;
  height: 40px;
  background-color: #ebf2fc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
  margin: 0 4px;
  // border: 1px solid #d6d6d6;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
      margin-right: 0;
  }
`