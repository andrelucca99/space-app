import { styled } from "styled-components";
import search from "./search.png";

const ContainerStyled = styled.div`
  position: relative;
  display: inline-block;
`;

const CampoStyled = styled.input`
  width: 566px;
  height: 56px;
  border-radius: 10px;
  border: 2px solid #C98CF1;
  padding: 12px, 16px;
  background: transparent;
  box-sizing: border-box;
  color: #D9D9D9;
  font-weight: 400;
  font-size: 20px;
  line-break: 20px;
  padding-left: 10px;
`;

const IconeLupa = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

const CampoTexto = ({ setFiltro }) => {
  return (
    <ContainerStyled>
      <CampoStyled onChange={(evento) => { setFiltro(evento.target.value) }} placeholder="O que você procura?" />
      <IconeLupa src={search} alt="ícone de lupa" />
    </ContainerStyled>
  )
}

export default CampoTexto;
