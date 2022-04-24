import { Col, Data, Matric, Stratergy } from "./types/Grid";

export const headerData:Col[] = [
    {
        id: 1,
        title: 'Q1'
    },
    {
        id: 2,
        title: 'Q2'
    },
    {
        id: 3,
        title: 'Q3'
    },
    {
        id: 4,
        title: 'Q4'
    }
]

export const stratergyData:Stratergy[] = [
    {
        id: 1,
        title: 'Stratergy One'
    },
    {
        id: 2,
        title: 'Stratergy Two'
    }
]

export const matData:Matric[] = [
    {
        id: 1,
        colsId: 1,
        stratergyId: 1,
        title: 'Matric One blah blah blah blah blah',
        description: 'First Matric of Success'
    },
    {
        id: 2,
        colsId: 1,
        stratergyId: 1,
        title: 'Matric Two',
        description: 'Second Matric of Success'
    },
    {
        id: 3,
        colsId: 3,
        stratergyId: 1,
        title: 'Matric Three',
        description: 'Third Matric of Success'
    },
    {
        id: 4,
        colsId: 4,
        stratergyId: 1,
        title: 'Matric Four',
        description: 'Forth Matric of Success'
    },
    {
        id: 5,
        colsId: 4,
        stratergyId: 2,
        title: 'Matric 6',
        description: 'Forth Matric of Success'
    }
]

