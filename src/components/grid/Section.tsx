import { useContext, useEffect, useState } from "react"
import { matData } from "../../Content"
import SectionContext from "../../context/SectionContext"
import { Col, Matric, SectionProps } from "../../types/Grid"
import Cell from "./Cell"
import { GridRow, SectionStyled } from "./Grid.styled"

const Section:React.FC<SectionProps> = ({ data, cols }) => {

  const {matrices, setMatrices} = useContext(SectionContext)

  useEffect(() => {
    setMatrices(matData.filter((matric:Matric) => {
      return matric.stratergyId === data.id
    }))
  }, [matData])

  const handleCardOnDrop = (id:number, colId:number, stratergyId:number) => {
    // Clone the data without the reference
    let tempData:Matric[] = JSON.parse(JSON.stringify(matrices))
  
    tempData = tempData.filter((item:Matric) => {
        if(item.id === id){
            item.colsId = colId,
            item.stratergyId = stratergyId
        }
        return item
    })
    setMatrices(tempData)
  }

  return (
      <>
        <SectionStyled>
          { data.title }
        </SectionStyled>
        <GridRow>
            {
              cols.map((item:Col) => {
                return (
                  <Cell 
                    key={`${item.id}-${data.id}`} 
                    stratergyId={data.id} 
                    colId={item.id}
                    data={matrices}
                    handleCardOnDropCallback={handleCardOnDrop}
                  />
                )
              })
            }
        </GridRow>
      </>
  )
}

export default Section