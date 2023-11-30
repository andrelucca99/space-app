import { styled } from "styled-components";
import BotaoIcon from "../../BotaoIcon";

const Figure = styled.figure`
  width: ${props => props.$expandida ? '90%' : '300px'};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001364;
    border-radius: 0 0 20px 20px;
    color: #fff;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: 'GandhiSansBold';
    }
    h4 {
      flex-grow: 1;
    }
    h3, h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Rodape = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAltenarFavorito }) => {

  const iconeFavorito = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png';

  return (
    <Figure $expandida={expandida} id={`foto-${foto.id}`}>
      <img src={foto.path} alt={foto.alt} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <Rodape>
          <h4>{foto.fonte}</h4>
          <BotaoIcon onClick={() => aoAltenarFavorito(foto)}>
            <img src={iconeFavorito} alt="Icone de favorito" />
          </BotaoIcon>
          {!expandida && <BotaoIcon aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
            <img src="/icones/expandir.png" alt="Icone de expandir" />
          </BotaoIcon>}
        </Rodape>
      </figcaption>
    </Figure>
  )
}

export default Imagem;
