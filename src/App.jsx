import { styled } from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais";
import Header from "./components/Header";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Bannner";
import bgBanner from "./assets/banner.png";
import Galeria from "./components/Galeria";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154582 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1140px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Header />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto={'A galeria mais completa de fotos do espaço!'}
              bgImage={bgBanner}
            />
            <Galeria />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  )
}

export default App
