import styled from 'styled-components'

export const DivAdminHome = styled.div`
    display:grid;
    grid-template-rows: 0.3fr 3fr;
    border:solid;
    background: linear-gradient(45deg, #7a1fa2 30%, #3b96f3 90%);
`
export const DivButton = styled.div`
    margin:10px;
    display:flex;
    gap:40px;
    `

export const DivCard = styled.div`

 h1{
     font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
     color: white;
     display: flex;
     justify-content:center;
 }


    `
export const DivInfos = styled.div`
border-bottom: solid 1px white;
margin: 20px;
 

 div{
     margin:20px;

     p{
         color:white;
         margin-top:10px;
     }
     
      }
`

export const DivButtons = styled.div`
    margin: 10px;
    display: flex;
    gap:10px;
    `