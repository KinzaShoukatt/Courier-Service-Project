import React from 'react'
import { Container, CoverImage,ImgDiv, Main } from "./style";
import CoverImg from "../../../assets/images/CoverImg.jpg";
import WhiteLogo from "../../../assets/images/LogoWhite.png"


const AuthLayout = ({children}) => {
  return (
    <Container>
        <CoverImage>
          <img src={CoverImg} alt="" />
          <div className='whiteLogo'>
             <img src={WhiteLogo} alt="" />
          </div>
        </CoverImage>
        
        <Main>
          <div>{children}</div>
        </Main>
      </Container>
  )
}

export default AuthLayout