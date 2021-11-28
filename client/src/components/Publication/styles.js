import styled from "styled-components"
import { COLORS } from "../../theme/colors"
export const Container = styled.div`
  width: 74%;
  font-size: 1.6rem;
  color: ${COLORS.gray.darkGray};
  @media (max-width:1100px){
    font-size:1.4rem;
  }
  @media (max-width: 800px){
    width: 100%;
  }
  
`

export const Text = styled.div`
  > figure img {
    max-width: 100%;
  }

`
export const Title = styled.h1`
  border-left: .6rem solid ${COLORS.black};
  padding-left: 1.4rem;
  border-radius: 3px;
  margin-top: 1vw;
`

export const Tags = styled.p`
  border-left: .6rem solid ${COLORS.green.darkGreen};
  padding-left: 1.4rem;
  border-radius: 3px;
`

export const AttachmentList = styled.p`
  border-left: .6rem solid ${COLORS.green.darkGreen};
  padding-left: 1.4rem;
  border-radius: 3px;
`

export const Attachment = styled.a`
border-radius: 3px;
margin-left: 1rem;
padding: .4rem;
background: ${COLORS.green.darkGreen};
color: ${COLORS.gray.lightGray};
text-decoration: none;
  :visited {
    color: ${COLORS.gray.lightGray};
  }
  :link {
    color: ${COLORS.gray.lightGray};
  }
`
