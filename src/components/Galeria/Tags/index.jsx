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
  justify-content: end;
  gap: 24px;
`;

const TagButton = styled.button`
    padding: 12px;
    border: 2px solid transparent;
    border-radius: 10px;
    cursor: pointer;
    color: #FFF;
    font-size: 24px;
    background: rgba(217, 217, 217, 0.3);
    transition: background-color 0.3s ease;
    box-sizing: border-box;
    &:hover {
      border-color: #C98CF1;
    }
`;

const Tags = ({ setTag }) => {
  return (
    <TagsContainer>
      <TagTitulo>Busque por tags:</TagTitulo>
      <TagStyled>
        {tags.map(tag => <TagButton key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</TagButton>)}
      </TagStyled>
    </TagsContainer>
  )
}

export default Tags;
