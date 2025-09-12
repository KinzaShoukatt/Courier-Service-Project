import React from 'react'
import { Container } from './style'
import { SiOpenai } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
const AI = () => {
    const navigate = useNavigate();
  return (
    <Container>
        <button onClick={() => navigate("/customer/ai-chat")}><SiOpenai color='white' size={20}/>Smart Help!</button>
    </Container>
  )
}

export default AI