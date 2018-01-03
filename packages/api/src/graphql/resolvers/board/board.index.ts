import { decks } from "./decks.resolver";
import { members } from "./members.resolver";
import { owner } from "./owner.resolver";

export const Board = {
    owner,
    decks,
    members
};
