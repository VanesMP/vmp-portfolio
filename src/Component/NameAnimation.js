import styled, { keyframes } from 'styled-components';
import { fadeInRightBig } from 'react-animations';

const fadeInAnimation = keyframes`${fadeInRightBig}`;

const FadeInDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;

function NameAnimation() {

    return(
        <FadeInDiv>
            <h1 className='titreHomepage'>Vanessa MACEDO-PINTO</h1>
        </FadeInDiv>
    )
}

export default NameAnimation;