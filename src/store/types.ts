import { Action } from 'redux';
import { Item } from 'app-api';
import { Story } from './stories/types';
import { Commenter } from './commenters/types';

export interface ItemsAction extends Action<string> {
    items: Item[];
}

export interface ErrorAction extends Action<string> {
    error: any;
}
export interface ReduxState {
    commenters: Commenter;
    error: any;
    ready: boolean;
    stories: Story[];
}

export * from './stories/types';
export * from './commenters/types';