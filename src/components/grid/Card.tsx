import { useContext, useState } from "react"
import SectionContext from "../../context/SectionContext"
import { CardProps, Matric } from "../../types/Grid"
import { CardClose, GridCard } from "./Grid.styled"

const Card:React.FC<CardProps> = ({ cardData, newCard, handleAddNewCardCallback }) => {
  
  const [edit, setEdit] = useState(newCard)
  const [title, setTitle] = useState(cardData.title)

  const { dispatch } = useContext(SectionContext)

  // Should be able to modify / remove Card from here
  const handleOnDragStart = (e:React.DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setData('card', JSON.stringify(cardData))
  }

  const handleTitleOnClick = (e:React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    setEdit(true)
  }

  const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let tempData:Matric = cardData
    tempData.title =  title
    if(newCard){
      dispatch(tempData, 'CREATE')
      if (handleAddNewCardCallback) {
        handleAddNewCardCallback()
      }
    }else{
      dispatch(tempData, 'UPDATE')
    }
    setEdit(false)
  }

  const handleCancelOnClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(newCard && handleAddNewCardCallback){
      handleAddNewCardCallback()
    }
    setEdit(false)
  }

  const handleOnDelete = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(cardData, 'DELETE')
  }


  return (
    <GridCard 
        draggable 
        onDragStart={ handleOnDragStart }
    >
      { edit ?
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
        <>
          <p 
            onClick={handleTitleOnClick}>
              {cardData.title}
          </p>
          <CardClose
            onClick={handleOnDelete}
          >
            Delete
          </CardClose>
        </>
      }
        
    </GridCard>
  )
}

export default Card