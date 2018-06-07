import * as React from 'react';

interface CommenterItemProps {
    author: string;
    count: number;
}

export default class CommenterItem extends React.Component<CommenterItemProps> {
    render(): JSX.Element {
        const { author, count } = this.props;
        return <li>{author} ({count.toString()})</li>;
    }
}
