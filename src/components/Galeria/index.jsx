import { styled } from "styled-components";

import Tags from "./Tags";
import Imagem from "./Imagem";
import Titulo from "../Titulo";
import Populares from "./Populares";

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const ImagensContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 24px;
`;

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAltenarFavorito, setTag }) => {
  return (
    <>
      <Tags setTag={setTag} />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotos.map(foto => <Imagem
              aoZoomSolicitado={aoFotoSelecionada}
              aoAltenarFavorito={aoAltenarFavorito}
              key={foto.id}
              foto={foto} />)
            }
          </ImagensContainer>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  )
}

export default Galeria;
