import styled from "styled-components";


export const DivFeed = styled.div`
    display:flex;
    /* grid-template-columns: 1fr 1fr 1fr; */
    justify-content:center;
   
   

    div{
        /* border:solid 1px #c5cacf; */
    }
`

// export const DivCreatePost = styled.div`
//     height: 220px;
//     background-color:pink;
// `
export const Posts = styled.div`
     height: 100vh;
     width: 500px;
    display: grid;
    grid-template-rows:0.1fr 0.3fr 1fr;
    border: solid 1px #c5cacf;
   
 `
 export const InputComments = styled.div`
 h3{
     color:#c5cacf ;
     margin-left: 10px;
     
 }
    
 `
 export const PostsLists = styled.div`
    border-top: solid 1px #c5cacf;
    `

// export const NavBar = styled.div`
//     width:20vw;
//     margin-left:38%;
    
//     `
// export const News = styled.div`
//     /* display: grid;
//     grid-template-rows:0.5fr 3fr 2fr; */
//     margin-right:37%;
// `

