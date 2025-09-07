import styled from "styled-components"
import GlobalStyles from './styles/GlobalStyles'

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  background-color: purple;
  color: white;
  border-radius: 7px;
  margin: 20px;
  cursor: pointer;
`

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
