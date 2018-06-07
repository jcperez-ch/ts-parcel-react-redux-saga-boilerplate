import styled, { keyframes } from 'react-emotion';

interface BusyProps {
    busy: boolean;
}

const pulse = keyframes`
  from, 20%, 53%, 80%, to { transform: scale(1.3); }
  40%, 43% { transform: scale(0.8); }
  70% { transform: scale(0.7); }
  90% { transform: scale(1); }
`;

const StyledBusy = styled<BusyProps, 'div'>('div')`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    position: fixed;
    text-align: center;
    background-color: rgba(32, 32, 32, 0.9);
    transition: ${
        props => props.busy
            ? 'opacity 200ms ease-in-out, visibility 200ms 0'
            : 'opacity 200ms ease-in-out, visibility 200ms'
    };
    z-index: 2;

    opacity: ${props => props.busy ? 1 : 0};
    visibility: ${props => props.busy ? 'visible' : 'hidden'};

    &:before {
        content: 'Loading...';
        position: fixed;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: ${pulse} ease 1s infinite;
    }
`;
StyledBusy.displayName = 'StyledBusy';

export default StyledBusy;