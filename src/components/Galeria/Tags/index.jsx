import { styled } from "styled-components";
import tags from "./tags.json";

const TagsContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-top: 56px;
`;

const TagTitulo = styled.h3`
  font-weight: 400;
  font-size: 24px;
  color: #D9D9D9;
  margin: 0;
`;

const TagStyled = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
`;

const TagButton = styled.button`
    font-size: 24px;
    color: #FFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`;

const Tags = () => {
  return (
    <TagsContainer>
      <TagTitulo>Busque por tags:</TagTitulo>
      <TagStyled>
        {tags.map(tag => <TagButton key={tag.id}>{tag.titulo}</TagButton>)}
      </TagStyled>
    </TagsContainer>
  )
}

export default Tags;
