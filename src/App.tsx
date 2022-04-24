import { Fragment, useState } from "react"
import { Container } from "./components/common/Container.styled"
import Section from "./components/grid/Section"
import Header from "./components/header/Header"
import { SectionContextProvider } from "./context/SectionContext"
import { Stratergy } from "./types/Grid"

// Data
import { headerData, stratergyData} from './Content'

function App() {

  // In a full stack application these states will be updated using data fetched from the backend
  // All related data is fetched when the application is launched after than only the related data will be fetched within the cell or card components
  const [header] = useState(headerData)
  const [stratergy, setStratergy] = useState(stratergyData)
  // const [boardData, setBoardData] = useState(data)
  
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
                />
              </SectionContextProvider>
            </Fragment>
          )
        })
      }
    </Container>
  )
}

export default App
