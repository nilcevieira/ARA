import styled from "styled-components";
export const Container = styled.div`
  width: 74%;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: max(2vh, 2vw);
`;
export const Items = styled.tr`
  border-radius: 3px;
  box-sizing: border-box;
  overflow: hidden;
`;
export const Page = styled.td`
  background: #000030;
`;
export const Link = styled.a`
  margin: 0 0.1vw 0 0.1vw;
  padding: 0 1vw 0 1vw;
  text-decoration: none;
  :visited {
    color: #e7e7e7;
  }
  :link {
    color: #e7e7e7;
  }
  :hover {
    color: #ff9c00;
  }
`;
