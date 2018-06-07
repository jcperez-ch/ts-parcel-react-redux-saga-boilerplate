import * as React from 'react';
import { connect } from 'react-redux';
import { ReduxState, stories as actionCreators } from 'app-store';
import App from './App';
import Busy from './materials/Busy';

interface RootProps {
    startApp: () => any;
    ready: boolean;
}

export class Root extends React.Component<RootProps> {
    componentDidMount() {
        const { ready, startApp } = this.props;
        if (!ready) {
            startApp();
        }
    }
    render(): JSX.Element {
        const { ready } = this.props;
        return (
            <React.Fragment>
                <App />
                <Busy busy={!ready} />
            </React.Fragment>
        );
    }
}

export default connect(
    ({ ready }: ReduxState) => ({ ready }),
    { startApp: actionCreators.fetchTopStories }
)(Root);
