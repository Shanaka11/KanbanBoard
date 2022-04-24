// Interfaces
export interface HeaderProps{
    headerItems : Col[]
}

export interface SectionProps{
    data: Stratergy,
    cols: Col[]
}

export interface CardProps{
    cardData: Matric,
    newCard?: Boolean,
    handleAddNewCardCallback?: () => void
}

export interface CellProps{
    stratergyId: number,
    colId: number,
    data: Matric[],
    handleCardOnDropCallback: (id:number, colId:number, stratergyId:number) => void
}

export interface SectionContextProps{
    matrices : Matric[]
    setMatrices: (matrices:Matric[]) => void,
    dispatch: (payload:Matric, action:SectionContextActionTypes) => void
}
// Types

// cols
export type Col = {
    id: number,
    title: string
}

// stratergy
export type Stratergy = {
    id: number,
    title: string
}
// matrix
export type Matric = {
    id: number,
    stratergyId: number,
    colsId: number,
    title: string,
    description: string 
}

// StratergyData
export type StratergyData = {
    col: Col,
    matrices: Matric[]
}

// Data
export type Data = {
    stratergy: Stratergy,
    stratergyData: StratergyData[]
}


// Action Types
export type SectionContextActionTypes = 'CREATE' | 'UPDATE' | 'DELETE' | 'RETRIEVE'