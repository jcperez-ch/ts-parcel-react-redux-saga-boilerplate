import { Action } from 'redux';
import { Item } from 'app-api';
import {
    FETCH_TOP_STORIES,
    FETCH_TOP_STORIES_SUCCESS,
    FETCH_TOP_STORIES_ERROR,
    FETCH_ITEMS_DETAILS,
    FETCH_ITEMS_DETAILS_SUCCESS,
    FETCH_ITEMS_DETAILS_ERROR,
} from './action.types';
import { ItemIdsAction } from './types';
import { ItemsAction, ErrorAction } from '../types';

export const fetchTopStories = (): Action => ({
    type: FETCH_TOP_STORIES,
});

export const fetchTopStoriesSuccess = (itemIds: number[]): ItemIdsAction => ({
    type: FETCH_TOP_STORIES_SUCCESS,
    itemIds,
});

export const fetchTopStoriesError = (error: any): ErrorAction => ({
    type: FETCH_TOP_STORIES_ERROR,
    error,
});

export const fetchItemDetails = (itemIds: number[]): ItemIdsAction => ({
    type: FETCH_ITEMS_DETAILS,
    itemIds,
});

export const fetchItemDetailsSuccess = (items: Item[]): ItemsAction => ({
    type: FETCH_ITEMS_DETAILS_SUCCESS,
    items,
});

export const fetchItemDetailsError = (error: any): ErrorAction => ({
    type: FETCH_ITEMS_DETAILS_ERROR,
    error,
});