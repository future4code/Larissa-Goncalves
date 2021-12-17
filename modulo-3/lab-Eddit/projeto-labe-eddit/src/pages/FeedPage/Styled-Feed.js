import styled from "styled-components";


export const DivFeed = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;


@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    grid-template-columns: 1fr;
    max-height:100%;
}
@media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    grid-template-columns: 1fr;
    max-height:100%;
}

`
export const DivListPost = styled.div`
        border:solid 1px #c5cacf;
    `
export const DivCreatePost = styled.div`
    height: 220px;
    border: solid 1px #c5cacf;
`
export const Posts = styled.div`
     height: 100vh;
    display: grid;
    /* border: solid 1px; */
    grid-template-rows:0.1fr 0.3fr;



@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
     width: 100%;
}

 `
export const NavBar = styled.div`
    width:15vw;
    margin-left:55%;
    `
export const News = styled.div`
    /* display: grid;
    grid-template-rows:0.5fr 3fr 2fr; */
    margin-right:37%;
`
export const DivHeaderFixed = styled.div`
    height:86px;
    border: solid 1px #c5cacf;

    `
