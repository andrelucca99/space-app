import { styled } from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais";
import Header from "./components/Header";
import BarraLateral from "./components/BarraLateral";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154582 96.76%);
  width: 100%;
  min-height: 100vh;
`

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Header />
      <BarraLateral />
    </FundoGradiente>
  )
}

export default App
