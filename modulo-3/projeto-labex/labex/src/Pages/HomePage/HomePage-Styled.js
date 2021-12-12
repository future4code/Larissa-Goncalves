import styled from "styled-components";

export const DivHome = styled.div`
  border: solid 1px green;
  display: grid;
  grid-template-columns: 1fr 0.6fr;
  background-color: #000000;

  div {
    /* border: solid 1px; */
  }
`;

export const DivText = styled.div`
  border: solid 1px red;
  height: 70vh;
  margin: 20px;
  display: grid;
  grid-template-rows: 2fr 0.4fr;

  h1, h4{
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    display: flex;
    justify-content: center;
    
  }

`;

export const DivButton = styled.div`
    display: flex;
    justify-content: center;


  button{
    gap: 10px;
      margin: 20px;

}
`
export const DivImg = styled.div`
 background: linear-gradient(45deg, #7a1fa2 30%, #3b96f3 90%);
  border: solid 1px black;
  display: flex;
  border-radius: 0px 0px 0px 20%;
  
  div {
    display: flex;
    height: 87vh;
    width: 200px;    
  }

  img {
    height: 600px;
    width: 200px;
  }
`;
