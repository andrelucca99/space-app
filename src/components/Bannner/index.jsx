import { styled } from "styled-components";

const FigureStyled = styled.figure`
  background-image: ${props => `url(${props.$bgImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
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
