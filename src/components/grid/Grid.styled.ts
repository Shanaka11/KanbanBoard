import styled from "styled-components";

export const SectionStyled = styled.div`
    width: 100%;
    height: 30px;
    background-color: red;
    display: grid;
    place-items: center;
`

export const GridRow = styled.div`
    display:flex;
`

export const GridCell = styled.div`
    margin: 0 4px;
    padding: 4px;
    position: relative;
    background-color: blue;
    min-width: 300px;
    height: 300px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:first-child {
        margin-left: 0;
    }

    &:last-child {
        margin-right: 0;
    }
`

export const GridCard = styled.div`
    padding: 8px;
    background: yellow;
    width: 250px;
    // min-height: 40px;
    cursor: pointer;
    margin: 4px 0;
    position: relative;
`

export const CardClose = styled.button`
    padding: 5px;
    position: absolute;
    cursor: pointer;
    right: 4px;
    top: 4px;
    border: none;
    // border-radius: 5px;
    background-color: red;
    color: white;
`

export const CardAdd = styled.button`
    padding: 5px;
    width: 250px;
    position: absolute;
    cursor: pointer;
    bottom: 4px;
    border: none;
    // border-radius: 5px;
    background-color: red;
    color: white;
`