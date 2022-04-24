import { useState } from "react"
import { CellProps, Matric } from "../../types/Grid"
import Card from "./Card"
import { CardAdd, GridCell } from "./Grid.styled"

const Cell:React.FC<CellProps> = ({ stratergyId, colId, data, handleCardOnDropCallback }) => {
    // Should have the functionality to add new Matrices
    const [newCard, setNewCard] = useState(false)

    const handleOnDrop = (e:React.DragEvent<HTMLDivElement>) => {
        const droppedCardData:Matric = JSON.parse(e.dataTransfer.getData('card'))
        handleCardOnDropCallback(droppedCardData.id, colId, stratergyId)
    }


    const handleOnDragOver = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const handleAddClick = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setNewCard(true)
    }

    const handleAddNewSuccess = () => {
        setNewCard(false)
    }

    return (
        <GridCell 
            onDragOver={ handleOnDragOver }
            onDrop={ handleOnDrop }
        >
            { data.filter((matric:Matric) => { return matric.colsId === colId}).map((item:Matric) => {
                return(
                <Card 
                    key={item.id} 
                    cardData={item}
                />
                )
            })}
            {
                newCard && (
                    <Card 
                        cardData={{
                            id: Math.floor(Math.random() * 1000),
                            colsId: colId,
                            stratergyId: stratergyId,
                            description: '',
                            title: ''
                        }} 
                        newCard={newCard}
                        handleAddNewCardCallback={handleAddNewSuccess}

                    />
                )
            }
            <CardAdd
                onClick={handleAddClick}
            >
                + Add New Item
            </CardAdd>
        </GridCell>
    )
}

export default Cell