import { styled } from "styled-components";
import BotaoIcon from "../BotaoIcon";

const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 100%;
  height: 80px;
  padding: 0 20px;
  background-color: #04244f;
  margin-top: 20px;
`;

const SociaisStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const TextFooter = styled.p`
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterStyled>
      <SociaisStyled>
        <BotaoIcon><img src="/imagens/sociais/facebook.svg" alt="Icone do facebook" /></BotaoIcon>
        <BotaoIcon><img src="/imagens/sociais/twitter.svg" alt="Icone do twitter" /></BotaoIcon>
        <BotaoIcon><img src="/imagens/sociais/instagram.svg" alt="Icone do instagram" /></BotaoIcon>
      </SociaisStyled>
      <TextFooter>Desenvolvido por André lucas.</TextFooter>
    </FooterStyled>
  )
}

export default Footer;
