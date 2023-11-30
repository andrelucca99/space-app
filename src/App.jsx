import { styled } from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais";
import Header from "./components/Header";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Bannner";
import { useEffect, useState } from "react";
import bgBanner from "./assets/banner.png";
import Galeria from "./components/Galeria";
import fotos from "./fotos.json";
import ModalZoom from "./components/ModalZoom";
import Footer from "./components/Footer";

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

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  // const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [filtro, setFiltro] = useState('');
  const [tag, setTag] = useState(0);
  const [fotoComZoom, setFotoComZoom] = useState(null);

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
      return filtroPorTag && filtroPorTitulo;
    });
    setFotosDaGaleria(fotosFiltradas);
  }, [filtro, tag]);

  // const aoAltenarFavorito = (foto) => {
  //   if (foto.id === fotoSelecionada?.id) {
  //     setFotoSelecionada({
  //       ...fotoSelecionada,
  //       favorita: !fotoSelecionada.favorita
  //     })
  //   }

  //   setFotosDaGaleria(fotosDaGaleria.map(fotoGaleria => {
  //     return {
  //       ...fotoGaleria,
  //       favorita: fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita
  //     }
  //   }))
  // }

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
              texto={'A galeria mais completa de fotos do espaço!'}
              bgImage={bgBanner}
            />
            <Galeria
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              aoAltenarFavorito={aoAltenarFavorito}
              fotos={fotosDaGaleria}
              setTag={setTag}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        // foto={fotoSelecionada}
        // aoFechar={() => setFotoSelecionada(null)}
        foto={fotoComZoom}
        aoFechar={() => setFotoComZoom(null)}
        aoAltenarFavorito={aoAltenarFavorito}
      />
      <Footer />
    </FundoGradiente>
  )
}

export default App;
