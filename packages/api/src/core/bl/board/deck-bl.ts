import { DeckDal } from "../../dal/board/deck-dal";

export class DeckBL {
    static async getAll(ids: string[]) {
        return DeckDal.getAll(ids);
    }

    static async getByBoardId(boardId: string): Promise<any[]> {
        let decks = await DeckDal.getByBoardId(boardId);

        return decks ? decks : [];
    }
}
