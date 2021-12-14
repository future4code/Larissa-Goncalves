import styled from "styled-components";

export const DivFeed = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100vh;

    div{
        border:solid;
    }
`
export const Posts = styled.div`
    display: grid;
    grid-template-rows:0.3fr;
 `

export const NavBar = styled.div`
    width:20vw;
    margin-left:38%;
    `
export const News = styled.div`
    display: grid;
    grid-template-rows:0.5fr 3fr 2fr;
    margin-right:25%;
    
    div{
        margin:10px;
    }
    `