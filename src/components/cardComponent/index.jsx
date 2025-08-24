import React from "react";
import { Container } from "./style";
const Card = (props) => {
  return (
    <Container>
      <div className="card">
        <div className="iconDiv">{props.icon}</div>
        <div className="text">
          <h2>{props.number}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </Container>
  );
};

export default Card;
