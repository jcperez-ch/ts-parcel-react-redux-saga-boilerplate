import styled from 'react-emotion';

const StyledContainer = styled('div')`
    padding: 0.5rem;

    @media (min-width: 769px) {
        padding: 1.2rem;
    }
    @media (min-width: 1201px) {
        padding: 2.4rem;
    }
`;

StyledContainer.displayName = 'StyledContainer';
export default StyledContainer;