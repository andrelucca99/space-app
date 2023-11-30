import { styled } from "styled-components";
import Titulo from "../../Titulo";

import fotosPopulares from "./fotos-populares.json";

const ColunaFotos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Imagem = styled.img`
  max-width: 212px;
  border-radius: 20px;
`;

const Botao = styled.button`
  width: 100%;
  padding: 12px 20px;
  margin-top: 16px;
  border: 2px solid #C98CF1;
  border-radius: 10px;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  font-size: 20px;
`;

const Populares = () => {
  return (
    <section>
      <Titulo $alinhamento="center">Populares</Titulo>
      <ColunaFotos>
        {fotosPopulares.map(foto => <Imagem key={foto.id} src={foto.path} alt={foto.alt} />)}
      </ColunaFotos>
      <Botao>Ver mais</Botao>
    </section>
  )
}

export default Populares;
