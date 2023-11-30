import { styled } from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 60px 0;
  img {
    max-width: 212px;
  }
`

const Header = ({ setFiltro }) => {
  return (
    <HeaderStyled>
      <img src="/imagens/logo.png" alt="Logo da Space App" />
      <CampoTexto setFiltro={setFiltro} />
    </HeaderStyled>
  )
}

export default Header;
