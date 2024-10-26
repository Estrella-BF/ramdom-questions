import { createContext, Dispatch, SetStateAction } from 'react';

export enum KeyItem {
    title = 'title',
    answer = 'answer',
}

export interface Item {
    title: string;
    answer: string;
}

/* type ItemContext = {
    itemsContext: Item,
    setItemsContext(item: Item): void
} */

export const ListItemContext = createContext<[Item[], Dispatch<SetStateAction<Item[]>>]>(
    [[], () => {}]
);
