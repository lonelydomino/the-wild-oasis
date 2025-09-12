import styled from "styled-components"
import GlobalStyles from './styles/GlobalStyles'
import Button from "./ui/Button"
import H1 from './ui/Heading'

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`
const StyledApp = styled.div`
  background-color: orangered;
  padding:20px;
`


function App() {


  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>

        <Button>Check In</Button>
        <Input type='number' placeholder="number of guests"/>
      </StyledApp>
    </>
  )
}

export default App
