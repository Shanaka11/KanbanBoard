import { createContext, useState } from "react";
import { Matric, SectionContextActionTypes, SectionContextProps } from "../types/Grid";

const SectionContext = createContext<SectionContextProps>({
    matrices: [],
    setMatrices: ([]) => {},
    dispatch: () => {}
});

export const SectionContextProvider:React.FC<any> = ({ children }) => {

    const [matrices, setMatrices] = useState<Matric[]>([])

    const handleCardNew = (data:Matric) => {
        let tempData:Matric[] = JSON.parse(JSON.stringify(matrices)) 
        tempData.push(data)
        setMatrices(tempData)
    }

    const handleCardUpdate = (data:Matric) => {
        let tempData:Matric[] = JSON.parse(JSON.stringify(matrices)) 
        tempData = tempData.filter((matric:Matric) => {
            if(matric.id === data.id){
            matric = data
            }
            return matric
        })
        setMatrices(tempData)
    }

    const handleCardDelete = (data:Matric) => {
        let tempData:Matric[] = JSON.parse(JSON.stringify(matrices)) 
        tempData = tempData.filter((matric:Matric) => {
            return matric.id !== data.id
        })
        setMatrices(tempData)
    }

    const dispatch = (payload:Matric, actionType:SectionContextActionTypes) => {
        switch(actionType){
            case 'CREATE':
                handleCardNew(payload)
                break;
            case 'DELETE':
                handleCardDelete(payload)
                break;
            case 'UPDATE':
                handleCardUpdate(payload)
                break;
        }
    }

    return(
        <SectionContext.Provider
            value={{
                matrices,
                setMatrices,
                dispatch
            }}
        >
            { children }
        </SectionContext.Provider>
    )
}

export default SectionContext