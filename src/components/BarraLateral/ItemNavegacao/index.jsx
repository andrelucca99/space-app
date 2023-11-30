import { styled } from "styled-components";

const ItemListaStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 22px;

  cursor: pointer;
  margin-bottom: 30px;

  color: ${props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
  font-family: ${props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
  font-size: 24px;
  line-height: 29px;
`;

const ItemNabegacao = ({ children, iconAtivo, iconeInativo, ativo = false }) => {
  return (
    <ItemListaStyled $ativo={ativo}>
      <img src={ativo ? iconAtivo : iconeInativo} alt="ícone de navegação" />
      {children}
    </ItemListaStyled>
  )
}

export default ItemNabegacao;
