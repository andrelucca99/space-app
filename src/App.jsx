import { useEffect, useState } from "react";

import { styled } from "styled-components";

import fotos from "./fotos.json";
import bgBanner from "./assets/banner.png";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Bannner";
import Galeria from "./components/Galeria";
import ModalZoom from "./components/ModalZoom";
import BarraLateral from "./components/BarraLateral";
import EstilosGlobais from "./components/EstilosGlobais";

const FundoGradiente = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154582 96.76%);
`;

const AppContainer = styled.div`
  width: 1140px;
  max-width: 100%;
  margin: 0 auto;
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

const App = () => {
  const [tag, setTag] = useState(0);
  const [filtro, setFiltro] = useState('');
  const [fotoComZoom, setFotoComZoom] = useState(null);
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
      return filtroPorTag && filtroPorTitulo;
    });
    setFotosDaGaleria(fotosFiltradas);
  }, [filtro, tag]);

  const aoAltenarFavorito = (foto) => {
    if (foto.id === fotoComZoom?.id) {
      setFotoComZoom({
        ...fotoComZoom,
        favorita: !fotoComZoom.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Header
          setFiltro={setFiltro}
        />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              bgImage={bgBanner}
              texto={'A galeria mais completa de fotos do espaço!'}
            />
            <Galeria
              setTag={setTag}
              fotos={fotosDaGaleria}
              aoAltenarFavorito={aoAltenarFavorito}
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        foto={fotoComZoom}
        aoFechar={() => setFotoComZoom(null)}
        aoAltenarFavorito={aoAltenarFavorito}
      />
      <Footer />
    </FundoGradiente>
  )
}

export default App;
