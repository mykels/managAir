import { Deck } from "../../deck/types/deck";
import { User } from "../../user/types/user";

export interface Board {
    id: string;
    name: string;
    starred?: boolean;
    decks: Deck[];
    users: User[];
}
