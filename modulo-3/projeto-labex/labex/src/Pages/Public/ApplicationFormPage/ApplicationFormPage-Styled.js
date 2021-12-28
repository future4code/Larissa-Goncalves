import Styled from 'styled-components'

export const DivApplicationForm = Styled.div`
display:flex;
justify-content: center;

h1{
    color:white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;
}

div{
    display:flex;
    flex-direction:column;
    margin:10px;
}

`

export const DivBackground = Styled.div`
    background: linear-gradient(45deg, #7a1fa2 30%, #3b96f3 90%);
    height: 90vh;
    display: grid;
    grid-template-rows: 0.3fr 2fr;
`