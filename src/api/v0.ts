import { Item } from './types';

const apiUrl = 'https://hacker-news.firebaseio.com/v0';

export const fetchApi = async <O> (
  url: string,
  requestInit: RequestInit
): Promise<O> => {
  let response: Response;
  const fetchUrl = /^https?:/i.test(url) ? url : `${apiUrl}${url}`;
  
  response = await window.fetch(fetchUrl, { ...requestInit, mode: 'cors' });
  
  return await response.json();
};

export const getTopStories = async (): Promise<number[]> => {
    return fetchApi<number[]>('/topstories.json', {
        method: 'GET',
    });
};

export const getItem = async (id: string): Promise<Item> => {
  return fetchApi<Item>(`/item/${id}.json`, {
    method: 'GET',
  });
};
