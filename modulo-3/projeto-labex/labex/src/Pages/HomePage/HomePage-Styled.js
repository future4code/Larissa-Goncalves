import Styled from 'styled-components'

export const DivHome = Styled.div`
    
`

export const DivGrid = Styled.div`
    display:grid;
    grid-template-columns: 1.5fr 1fr;
    border:solid 1px;

    div{
        border: solid 1px;
    }

   `
export const DivText = Styled.div`
    height:60vh;
    weight:20vw;
    margin:70px;
    display: grid;
    grid-template-rows: 2fr 0.5fr;
    
`

export const DivPhoto = Styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height:70vh;
    margin: 80px;
    gap:20px;
    
    
    `

export const DivFlow = Styled.div`
    border:solid 1px pink;
    height:50vh;
    display: flex;
    justify-content:center;

    div{
        display: flex;
        flex-direction: column;
        margin: 30px;
        margin-top: 90px;
        height:300px;
        width: 400px;
        border: solid 1px red;
        

    }
    `
