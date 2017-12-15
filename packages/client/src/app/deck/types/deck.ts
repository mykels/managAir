import { Card } from "../../card/types/card";

export interface Deck {
    id: string;
    name: string;
    cards: Card[];
}
