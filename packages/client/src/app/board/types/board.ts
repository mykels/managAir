import { Deck } from "../../deck/types/deck";

export class Board {
    id: string;
    name: string;
    starred?: boolean;
    decks: Deck[];
}
