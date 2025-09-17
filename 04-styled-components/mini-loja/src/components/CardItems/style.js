import styled from "styled-components";
/* Items cards */

export const CardItemsContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid #E1E1E1;
  overflow: hidden;
  `;

export const ImgItemsCard = styled.img`
  height: 300px;
  padding: 0.5rem;
  transition: transform 200ms ease, opacity 200ms ease;

  &:hover{
    transform: scale(1.1);
    opacity: 0.9;
  }
`;

export const TitleItemsCard = styled.h2`
  padding: 0.5rem;
  font-size: 1rem;
  text-align: center;
  color: var(--text-color);
`;

export const PriceItemsCard = styled.span`
  padding-bottom: 1rem;
  font-size: 1rem;
  text-align: center;
  color: #F94343;
  `;


export const IconsShopping = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  cursor: pointer;
  background-color: var(--secondary-color);
  border: none;
  
  &:hover{
    background-color: #F94343;
  }
`;

export const IconsShoppingAddCart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  cursor: pointer;
  border: none;
  background-color: #F94343;
`;

export const IconLink  = styled.img`
  height: 25px;
`;