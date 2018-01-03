import { DeckBL } from "../../../core/bl/board/deck-bl";

export async function decks(board: any) {
    console.log(`Resolving board decks for board [${board.id}]`);
    return DeckBL.getByBoardId(board.id);
}
