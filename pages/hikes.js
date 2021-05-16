
import styled from '@emotion/styled';

/*********************************** 
@TODO
 - implement mapbox
 - cluster map of hikes
 - toggle for list view
 - filter by : all / close to me / region / country
 - link to individual hike page

*************************************/

export default function hikes() {
    return (

        <StyledHikes> 
            <h1>All Hikes</h1>
        </StyledHikes>
    )
}

const StyledHikes = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: yellow;
`
