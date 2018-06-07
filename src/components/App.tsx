import * as React from 'react';
import TwoColumns from './materials/TwoColumns';
import Stories from './Stories';
import Commenters from './Commenters';

export default class App extends React.Component {
    render(): JSX.Element {
        return (
            <TwoColumns>
                <Stories />
                <Commenters />
            </TwoColumns>
        );
    }
}
