import styled from "styled-components"

const Divcomp2 = styled.div`
    border: 2px solid green;
    padding: 15px;
    p{
        color: darkgoldenrod;
    }
    .teste{
        color: red;
    }
`




export default function Componente2(){
    return(
        <Divcomp2>
            <h2>Componente2</h2>
            <p>Componente com exemplo de Styled Componente interno</p>
        </Divcomp2>
    )
}