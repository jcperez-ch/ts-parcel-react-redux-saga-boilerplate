import { Action } from 'redux';

export interface ItemIdsAction extends Action<string> {
    itemIds: number[];
}

export interface Story {
    id: number;
    title: string;
    url: string;
}