import styled from "styled-components"
import { COLORS } from "../../theme/colors"


export const Container = styled.div`
  width: 100%;
  height: 4.2rem;;
  margin-bottom: 1vw;
  @media (max-width: 800px){
    height: 3.6rem;
  }
`

export const Form = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin: 0;
`

export const InputText = styled.input`
  padding: 0;
  padding-left: 5px;
  height: 100%;
  width: 100%;
  border: 0.2rem solid ${COLORS.black};
  border-radius: 4px 0 0 4px;
  outline: none;
  background-color: ${COLORS.gray.lightGray};
  font-size: 1.6rem;
  color: ${COLORS.black};
  ::placeholder {
    color: ${COLORS.black};
  }
  @media (max-width: 1100px){
    border: 0.15rem solid ${COLORS.black};
    font-size: 1.4rem;
  }
`

export const SubmitButton = styled.a`
  height: 100%;
  width: 12rem;
  background: ${COLORS.black};
  text-align: center;
  color: ${COLORS.white};
  font-weight: bold;
  border: 0.2rem solid ${COLORS.black};
  border-left: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 1.6rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover{
      border:0.2rem solid ${COLORS.black};
      background : white;
      color: ${COLORS.orange.lightOrange};
  }
  @media (max-width: 1100px){
    border: 0.15rem solid ${COLORS.black};
    font-size: 1.4rem;
    :hover{
      border:0.15rem solid ${COLORS.black};
    }
  }
`

export const TextButton = styled.p`
  margin: 0px;
`
