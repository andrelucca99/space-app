import { styled } from "styled-components";
import Imagem from "../Galeria/Imagem";
import BotaoIcon from "../BotaoIcon";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogStyled = styled.dialog`
  position: absolute;
  top: 294px;
  background-color: transparent;
  width: 1156px;
  border: 0;
  padding: 0;
  display: flex;
  justify-content: center;
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
