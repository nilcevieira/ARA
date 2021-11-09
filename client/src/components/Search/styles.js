import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 4.2rem;;
  margin-bottom: 1vw;
  @media (max-width: 800px){
    height: 3.6rem;
  }
`;
export const Form = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin: 0;
`;
export const InputText = styled.input`
  padding: 0;
  padding-left: 5px;
  height: 100%;
  width: 100%;
  border: 0.2rem solid #000030;
  border-radius: 4px 0 0 4px;
  outline: none;
  background-color: #e7e7e7;
  font-size: 1.6rem;
  color: #0D0D0D;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #0D0D0D;
  }
  @media (max-width: 1100px){
    border: 0.15rem solid #000030;
    font-size: 1.4rem;
  }
`;
export const Button = styled.a`
  height: 100%;
  width: 12rem;
  background: linear-gradient(90deg, rgba(0,0,17,1) 0%, rgba(0,0,48,1) 100%);
  text-align: center;
  color: #f2f2f2;
  font-weight: bold;
  border: 0.2rem solid #000011;
  border-left: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 1.6rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover{
      border:0.2rem solid #000011;
      background :linear-gradient(90deg, rgba(0,0,17,1) 0%, rgba(0,0,48,1) 100%);
      color: #FF9C00;
  }
  @media (max-width: 1100px){
    border: 0.15rem solid #000011;
    font-size: 1.4rem;
    :hover{
      border:0.15rem solid #000011;
    }
  }
`;
export const Text = styled.p`
  margin: 0px;
`;
