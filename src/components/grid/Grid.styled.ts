import styled from "styled-components";

export const SectionStyled = styled.div`
    width: 1224px;
    max-width: 100%;
    height: 35px;
    background-color: #0179BF;
    color: white;
    display: grid;
    place-items: center;
    position: sticky;
    left: 0;

    p {
        cursor: pointer;
    }
`

export const SectionClose = styled.button`
    padding: 5px;
    position: absolute;
    cursor: pointer;
    right: 4px;
    top: 4px;
    border: none;
    background-color: red;
    color: white;
`

export const GridRow = styled.div`
    display:flex;
`

export const GridCell = styled.div`
    margin: 0 4px;
    padding: 4px;
    position: relative;
    background-color: #EBECF0;
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
    background: #FFFFFF;
    width: 250px;
    box-shadow: 0 1px 0 #091e4240;
    cursor: pointer;
    margin: 4px 0;
    position: relative;
    font-size: 0.9rem
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

export const SectionAdd = styled.button`
    width: 1224px;
    max-width: 100%;
    padding: 5px;
    cursor: pointer;
    border: none;
    background-color: #0179BF;
    color: white;
    position: sticky;
    left: 0;
    transition: background-color 0.2s ease-in;

    &:hover{
        background-color: #015b8f;
    }
`