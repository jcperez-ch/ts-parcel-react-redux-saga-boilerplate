import * as React from 'react';
import { Story } from 'app-store';

export default class StoryItem extends React.Component<Story> {
    render(): JSX.Element {
        const { id, title, url } = this.props;
        return (
            <li id={id.toString()}>
                <a href={url} target="_blank">{title}</a>
            </li>
        );
    }
}
