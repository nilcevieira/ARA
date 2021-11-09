import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(180deg, rgba(0,0,17,1) 0%, rgba(0,0,48,1) 100%);
  min-height: 20vh;
  width: 100%;
  color: #E7E7E7;
  font-size: 1.6rem;
`;
export const Content = styled.div`
  > figure img {
    max-width: 100%;
  }
  padding: max(2vh, 2vw);
`;
