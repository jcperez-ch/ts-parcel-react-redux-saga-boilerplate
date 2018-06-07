import styled from 'react-emotion';

const StyledTwoColumns = styled('div')`
    display: flex;
    flex-wrap: nowrap;

    > * { flex: 1 1 50%; }
`;

StyledTwoColumns.displayName = 'StyledTwoColumns';
export default StyledTwoColumns;
