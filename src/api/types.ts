export type  ItemType = 'job' | 'story' | 'comment' | 'poll' | 'pollopt';

export interface Item {
    id: number;
    deleted?: boolean;
    type: ItemType;
    by: string;
    time: number;
    dead: boolean;
    parent: string;
    poll?: number;
    kids?: number[];
    score: number;
    title: string;
    parts?: number[];
    text: string;
    url: string;
    descendants?: number;
}
