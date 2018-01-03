import { board } from "./board.resolver";
import { card } from "./card.resolver";
import { me } from "./me.resolver";
import { user } from "./user.resolver";

export const Query = {
    me,
    user,
    board,
    card
};
