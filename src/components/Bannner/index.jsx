import { styled } from "styled-components";

const FigureStyled = styled.figure`
  display: flex;
  align-items: center;
  flex-grow: 1;

  max-width: 100%;
  min-height: 328px;
  margin: 0;

  background-image: ${props => `url(${props.$bgImage})`};
  background-repeat: no-repeat;
  border-radius: 20px;
`;

const TituloStyled = styled.h1`
  max-width: 300px;
  padding: 0 64px;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #FFF;
`;

const Banner = ({ texto, bgImage }) => {
  return (
    <FigureStyled $bgImage={bgImage}>
      <TituloStyled>{texto}</TituloStyled>
    </FigureStyled>
  )
}

export default Banner;
