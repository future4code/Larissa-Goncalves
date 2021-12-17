import styled from "styled-components"

export const DivHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    height:60px;
    width: 33%;
    position:fixed;
    border-bottom: solid 1px #c5cacf;
    background:  linear-gradient(45deg, #1f9bf0 30%, #befcc9 90%) ;


@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
     width: 100%;
}
@media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    width: 100%;
}


    h3{
        color: black;
        margin: 10px;
    }
`