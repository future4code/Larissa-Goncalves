import styled from "styled-components";


export const DivMatch = styled.div`
  box-shadow: 2px 2px 10px 5px grey;
  height: 80vh;
  width: 380px;
  margin: auto;
  margin-top: 100px;
  display: grid;
  grid-template-rows: 1fr 5fr;
  border-radius: 30px;
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);


  div{
    /* border: solid 1px; */
    /* border-bottom: solid 1px; */
    
  }
  `
  export const DivRender = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    border-bottom: solid 0.5px;
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   
    `
  export const DivImg = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 80px;
  align-items: flex-start;
  display: flex;
  margin:10px;
  
 
    `
