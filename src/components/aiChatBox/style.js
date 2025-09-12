import styled from "styled-components";
 export const Container = styled.div`
 position: fixed;
 right: 20px;
 bottom: 20px;
 button{
    background-color: var(--dark-teal);
    padding: 10px;
    border: none;
    border-radius: 10px;
    display: flex;
    align-self: start;
    align-items: center;
    color: var(--secColor);
    font-family: "regular";
    gap: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: all 1s;
    box-shadow: 0px 4px 14px rgba(73, 70, 70, 0.5);
 }
 button:hover{
   transform: translateY(-2px);
   box-shadow: 0px 4px 14px rgba(93, 90, 90, 2);
   padding: 11px;
 }

 `;