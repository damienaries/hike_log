import styled from '@emotion/styled';


export default function leaderboard() {
    return (
        <StyledBoard>
            <h2>
                This is the leaderboard
            </h2>
        </StyledBoard>
        
    )
}


const StyledBoard = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: green;
`