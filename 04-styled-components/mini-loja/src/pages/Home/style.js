import styled from "styled-components";
/* Home */
export const SectionHome = styled.section`
  display: flex;
  flex-direction: column;
  padding: 80px;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color);
`;

export const TitleHome = styled.section`
  color: var(--text-color);
`;

export const ItemsCards = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
  .itemsCards {
    grid-template-columns: repeat(1, 1fr);
  }
}

  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;