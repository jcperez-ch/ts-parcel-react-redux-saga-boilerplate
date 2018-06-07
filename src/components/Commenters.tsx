import * as React from 'react';
import { connect } from 'react-redux';
import { ReduxState } from 'app-store';
import CommenterItem from './CommenterItem';
import Container from './materials/Container';
import List from './materials/List';

interface CommentersProps {
    commenters: { author: string, count: number }[];
}

export class CommentersComponent extends React.Component<CommentersProps> {
    render(): JSX.Element {
        const { commenters } = this.props;
        return (
            <Container>
                <h2>Top Commenters</h2>
                <List>
                    {commenters.map(commenter => (
                        <CommenterItem key={commenter.author} {...commenter} />
                    ))}
                </List>
            </Container>
        );
    }
}

const mapStateToProps = ({ commenters }: ReduxState) => ({
    commenters: Object
        .keys(commenters)
        .map(author => ({ author, count: commenters[author] }))
        .sort((prev, next) => next.count - prev.count)
        .filter((_, index) => index < 10),
});

export default connect(mapStateToProps)(CommentersComponent);