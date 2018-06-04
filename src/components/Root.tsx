import * as React from 'react';
import { connect } from 'react-redux';
import { ReduxState, ready as actionCreators } from 'app-store';
import App from './App';

interface RootProps {
    setAppAsReady: () => any;
    ready: boolean;
}

export class Root extends React.Component<RootProps> {
    componentDidMount() {
        const { ready, setAppAsReady } = this.props;
        if (!ready) {
            setAppAsReady();
        }
    }
    render(): JSX.Element {
        return <App />;
    }
}

export default connect(
    ({ ready }: ReduxState) => ({ ready }),
    { setAppAsReady: actionCreators.setAppAsReady },
)(Root);
