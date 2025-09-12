import styled from "styled-components";

export const Heading = styled.p`
color: var(--dark-teal);
  font-family: "semibold";
  font-size: 27px;
`;

export const Container = styled.div`
box-sizing: border-box;
background-color: var(--secColor);
border-radius: 10px;
display: flex;
flex-direction: column;
padding: 10px;
 .textareaDiv{
    background-color: var(--secColor);
    border-radius: 10px;
    /* min-height: 30vh; */
 }
 .btn{
    background-color: var(--dark-teal);
    border: none;
    font-family: "regular";
    color: var(--secColor);
    margin-top: 10px;
    align-self: flex-end;
    font-weight: bold;
    font-size: 15px;
     padding: 10px 20px;
     border-radius: 8px;

 }
`;