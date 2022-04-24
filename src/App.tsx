import { Fragment, useState } from "react"
import { Container } from "./components/common/Container.styled"
import Section from "./components/grid/Section"
import Header from "./components/header/Header"
import { SectionContextProvider } from "./context/SectionContext"
import { Stratergy } from "./types/Grid"

// Data
import { headerData, stratergyData} from './Content'
import { SectionAdd } from "./components/grid/Grid.styled"

function App() {

  // In a full stack application these states will be updated using data fetched from the backend
  // All related data is fetched when the application is launched after than only the related data will be fetched within the cell or card components
  const [header] = useState(headerData)
  const [stratergy, setStratergy] = useState(stratergyData)
  const [newStratergy, setNewStratergy] = useState(false)
  
  // Create Stratergy
  const handleCreateStratergy = (data:Stratergy) => {
    let tempData:Stratergy[] = JSON.parse(JSON.stringify(stratergy))
    tempData.push(data)
    setStratergy(tempData)
    setNewStratergy(false)
  }
  // Update Stratergy
  const handleUpdateStratergy = (data:Stratergy) => {
    let tempData:Stratergy[] = JSON.parse(JSON.stringify(stratergy))
    tempData = tempData.filter((stratergy:Stratergy) => {
      if(stratergy.id === data.id){
        return data
      }
      return stratergy
    })
    setStratergy(tempData)
  }
  // Delete Stratergy
  const handleDeleteStratergy = (data:Stratergy) => {
    let tempData:Stratergy[] = JSON.parse(JSON.stringify(stratergy))
    tempData = tempData.filter((stratergy:Stratergy) => {
       console.log(stratergy.id , data.id)
       return stratergy.id !== data.id
    })
    setStratergy(tempData)
  }
  // Handle Cancel
  const handleCancel = () => {
    setNewStratergy(false)
  }
  
  
  return (
    <Container >
      <Header headerItems={header}/>
      {
        stratergy.map((item:Stratergy) => {
          return (
            <Fragment key={item.id}>
            <SectionContextProvider>
              <Section
                data={item}
                cols={header}
                handleCreate={handleCreateStratergy}
                handleUpdate={handleUpdateStratergy}
                handleDelete={handleDeleteStratergy}
              />
            </SectionContextProvider>
            {/* Add New Section Component Goes Here */}
            </Fragment>
          )
        })
      }
      {
        !newStratergy ? (
          <SectionAdd
            onClick={(event) => setNewStratergy(true)}
          >
            + Add New Stratergy
          </SectionAdd>
        ) : (
          <SectionContextProvider>
            <Section
                  data={{
                    id: Math.floor(Math.random() * 1000),
                    title: ''
                  }}
                  cols={[]}
                  newStratergy={newStratergy}
                  handleCreate={handleCreateStratergy}
                  handleUpdate={handleUpdateStratergy}
                  handleDelete={handleDeleteStratergy}
                  handleCancel={handleCancel}
            /> 
          </SectionContextProvider>
        )

      }
    </Container>
  )
}

export default App
