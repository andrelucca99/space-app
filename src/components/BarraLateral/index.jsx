import { styled } from "styled-components";
import ItemNabegacao from "./ItemNavegacao";

const ListaStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaStyled>
          <ItemNabegacao
            iconAtivo="/icones/home-ativo.png"
            iconeInativo="/icones/home-inativo.png"
            ativo={true}
          >
            Início
          </ItemNabegacao>
          <ItemNabegacao
            iconAtivo="/icones/mais-visitas-ativo.png"
            iconeInativo="/icones/mais-visitas-inativo.png"
          >
            Mais visitas
          </ItemNabegacao>
          <ItemNabegacao
            iconAtivo="/icones/mais-curtidas-ativo.png"
            iconeInativo="/icones/mais-curtidas-inativo.png"
          >
            Mais curtidas
          </ItemNabegacao>
          <ItemNabegacao
            iconAtivo="/icones/novas-ativo.png"
            iconeInativo="/icones/novas-inativo.png"
          >
            Novas
          </ItemNabegacao>
          <ItemNabegacao
            iconAtivo="/icones/surpreenda-me-ativo.png"
            iconeInativo="/icones/surpreenda-me-inativo.png"
          >
            Supreenda-me
          </ItemNabegacao>
        </ListaStyled>
      </nav>
    </aside>
  )
}

export default BarraLateral;
