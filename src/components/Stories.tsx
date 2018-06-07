import * as React from 'react';
import { connect } from 'react-redux';
import { ReduxState, Story } from 'app-store';
import StoryItem from './StoryItem';
import Container from './materials/Container';
import List from './materials/List';

interface StoriesProps {
    stories: Story[];
}

export class StoriesComponent extends React.Component<StoriesProps> {
    render(): JSX.Element {
        const { stories } = this.props;
        return (
            <Container>
                <h2>Top Stories</h2>
                <List>
                    {stories.map(story => (
                        <StoryItem key={story.id} {...story} />
                    ))}
                </List>
            </Container>
        );
    }
}

const mapStateToProps = ({ stories }: ReduxState) => ({
    stories,
});

export default connect(mapStateToProps)(StoriesComponent);