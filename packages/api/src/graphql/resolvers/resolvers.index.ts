import { Board } from "./board/board.index";
import { Card } from "./card/card.index";
import { Deck } from "./deck/deck.index";
import { Mutation } from "./mutation/mutation.index";
import { Query } from "./query/query.index";
import { User } from "./user/user.index";

export const resolvers = {
    Query,
    Mutation,
    User,
    Board,
    Deck,
    Card
};
