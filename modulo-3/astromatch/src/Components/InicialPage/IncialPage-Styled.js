import styled from "styled-components";

export const DivCard = styled.div`
  box-shadow: 2px 2px 10px 5px grey;
  border-radius: 30px;
  height: 80vh;
  width: 380px;
  margin: auto;
  margin-top: 100px;
  display: grid;
  grid-template-rows: 1fr 4fr 1fr 2fr;
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
  

 
  div{
    /* border:1px solid ; */
  }
`
export const ImagemPerfil = styled.img`
  border-radius: 1%; 
  height: 400px;
  width: 340px;
  display: flex;
  margin-left: 19px;
  box-shadow: 6px 6px 10px 2px #f53272;
`;

export const DivBio = styled.div`
  color: white;
  
  h3{
    margin-left: 23px;
    font-size: 1em;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  p{
    margin-left: 23px;
    font-size: 1em;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
`

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 20px;
  `

  export const DivHeader = styled.div`
    display: flex;
    justify-content:flex-end;
    padding: 20px;

    img{
      height: 70px;
      width: 100px;
      margin-right: 200px;
    }
    `



