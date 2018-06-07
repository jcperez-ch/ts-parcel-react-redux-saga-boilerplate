import styled from 'react-emotion';

const StyledList = styled('ul')`
    display: flex;
    flex-direction: column;
    width: 100%;

    > li {
        flex: 0 0 auto;
        padding: 0.5rem;
        border-top: 1px dashed gray;

        &:first-child { border-top: none; }
    }
`;

StyledList.displayName = 'StyledList';
export default StyledList;
