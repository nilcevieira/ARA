import styled from "styled-components"

export const Container = styled.div`
  max-width: 74%;
  font-size: 1.6rem;
  color: #0d0d0d;
  @media (max-width:1100px){
    font-size:1.4rem;
  }
  
`

export const Text = styled.div`
  > figure img {
    max-width: 100%;
  }

`
export const Title = styled.h1`
  border-left: .6rem solid #000011;
  padding-left: 1.4rem;
  border-radius: 3px;
  margin-top: 1vw;
`

export const Tags = styled.p`
  border-left: .6rem solid #ff9c00;
  padding-left: 1.4rem;
  border-radius: 3px;
`

export const AttachmentList = styled.p`
  border-left: .6rem solid #ff9c00;
  padding-left: 1.4rem;
  border-radius: 3px;
`

export const Attachment = styled.a`
border-radius: 3px;
margin-left: 1rem;
padding: .4rem;
background: #000030;
color: #e7e7e7;
text-decoration: none;
  :visited {
    color: #e7e7e7;
  }
  :link {
    color: #e7e7e7;
  }
`
