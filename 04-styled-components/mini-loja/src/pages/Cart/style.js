import styled from "styled-components";
/* Carrinho */

export const BorderHeadTable = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  color: var(--text-color);
`;

export const ImagesTable = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
  color: var(--text-color);
`;

export const TitleTable = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
  color: var(--text-color);
`;

export const PriceTable = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
  color: var(--text-color);
`;

export const AmountTable = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
  color: var(--text-color);
`;

export const QuantityInput = styled.input`
  width: 80px;
  padding: 8px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  text-align: center;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);

  &:focus {
    border-color: #217FD1;
    box-shadow: 0 0 8px rgba(59, 130, 246, 0.4);
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
  background-color: #f3f4f6; 
  border-radius: 4px;
  width: 16px;
  height: 16px;
  cursor: pointer;
}
`;

export const CheckoutBtn = styled.button`
  margin-top: 20px;
  padding: 14px 24px;
  width: 100%;
  background: linear-gradient(90deg, #3b82f6, #9333ea);
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);

  &:hover {
    background: linear-gradient(90deg, #2563eb, #7e22ce);
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0,0,0,0.2);
}
    &:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
`;


export const CartSection = styled.section`
  background-color: var(--bg - color);
`;

export const EmptyCart = styled.section`
  margin: auto;
  padding: 100px;
  width: 800px;
`;

export const EmptyText = styled.p`
  font-size: 2rem;
  text - align: center;
  font - weight: bold;
  color: var(--text - color);
`;