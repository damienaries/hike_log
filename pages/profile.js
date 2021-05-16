import styled from '@emotion/styled';

export default function profile() {
    return (
        <StyledProfile>
            <h2>
                This is the leaderboard
            </h2>
        </StyledProfile>
        
    )
}


const StyledProfile = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: blue;
`