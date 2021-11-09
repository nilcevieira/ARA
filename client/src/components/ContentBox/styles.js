import styled from "styled-components";
export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px;
  background-color: #e7e7e7;
`;

export const Box = styled.div`
  margin: 0 auto;
  width: 85%; /* Valor da Largura */
  max-width: 1360px;
`;
export const BoxCenter = styled.div`
  margin: 0 auto;
  width: 100%; /* Valor da Largura */
  max-width: 100%;
  display: flex;
  @media (max-width: 800px){
    flex-direction: column-reverse;
  }
`;
export const BoxRight = styled.div`
  width: 25%;
  margin-left: 0.9vw;
  margin-top: 1vw;
  padding-left: 2vw;
  @media (max-width:800px){
    margin-left:0;
    width: 100%;
  }
  @media (max-width:900px){
    padding: 0;
  }
`;
