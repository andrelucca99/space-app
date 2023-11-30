import { styled } from "styled-components";

import BotaoIcon from "../BotaoIcon";
import Imagem from "../Galeria/Imagem";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const DialogStyled = styled.dialog`
  position: absolute;
  display: flex;
  justify-content: center;

  width: 1156px;
  padding: 0;
  border: 0;
  top: 294px;

  background-color: transparent;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
`;

const ModalZoom = ({ foto, aoFechar, aoAltenarFavorito }) => {
  return (
    <>
      {foto && <>
        <Overlay />
        <DialogStyled open={!!foto} onClose={aoFechar}>
          <Imagem foto={foto} expandida={true} aoAltenarFavorito={aoAltenarFavorito} />
          <form method="dialog">
            <BotaoIcon formMethod="dialog">
              <img src="/icones/fechar.png" alt="Icone de fechar" />
            </BotaoIcon>
          </form>
        </DialogStyled>
      </>}
    </>
  )
}

export default ModalZoom;
