import { Item } from 'app-api';
import {
    FETCH_KID_ITEMS_DETAILS_SUCCESS,
    FETCH_KID_ITEMS_DETAILS_ERROR,
} from './action.types';
import { ItemsAction, ErrorAction } from '../types';

export const fetchKidItemDetailsSuccess = (items: Item[]): ItemsAction => ({
    type: FETCH_KID_ITEMS_DETAILS_SUCCESS,
    items,
});

export const fetchKidItemDetailsError = (error: any): ErrorAction => ({
    type: FETCH_KID_ITEMS_DETAILS_ERROR,
    error,
});
