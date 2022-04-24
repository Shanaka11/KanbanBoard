import { useContext, useEffect, useState } from "react"
import { matData } from "../../Content"
import SectionContext from "../../context/SectionContext"
import { Col, Matric, SectionProps } from "../../types/Grid"
import Cell from "./Cell"
import { GridRow, SectionClose, SectionStyled } from "./Grid.styled"

const Section:React.FC<SectionProps> = ({ data, cols, newStratergy, handleCreate, handleUpdate, handleDelete, handleCancel }) => {

  const {matrices, setMatrices} = useContext(SectionContext)
  const [title, setTitle] = useState(data.title)
  const [edit, setEdit] = useState(newStratergy)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    setMatrices(matData.filter((matric:Matric) => {
      return matric.stratergyId === data.id
    }))
  }, [matData])

  const handleOnClick = (event:React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    setEdit(true)
  }

  const handleFormSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const tempData = data
    tempData.title = title
    if(newStratergy){
      handleCreate(tempData)
    }else{
      handleUpdate(tempData)
    }
    setEdit(false)
  }

  const handleCancelOnClick = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(newStratergy && handleCancel) {
      handleCancel()
    }
    setEdit(false)
  }

  const handleCloseOnClick = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('delete')
    handleDelete(data)
  }

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
        <SectionStyled
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          { 
            edit ? 
            <form onSubmit={handleFormSubmit}>
              <input
                required
                type='text'
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                autoFocus
              />
              <button
                type="submit"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleCancelOnClick}
              >
                Cancel
              </button>
            </form>
            : 
            <p
              onClick={handleOnClick}
            >
              {data.title}
            </p> 
          }
          {
            !edit && hover &&
              <SectionClose
                onClick={handleCloseOnClick}
              >
                Delete
              </SectionClose>
          }
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