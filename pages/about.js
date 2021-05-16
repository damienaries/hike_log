import styled from '@emotion/styled';

/*********************************** 
@TODO
 - Write up rules for playing and scoring

*************************************/

export default function about() {
    return (

        <StyledAbout> 
            <h1>About Page</h1>
        </StyledAbout>
    )
}

const StyledAbout = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: aqua;
`
