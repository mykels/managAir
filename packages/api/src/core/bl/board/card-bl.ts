import { CardDal } from "../../dal/board/card-dal";

export class CardBL {
    static async get(id: string) {
        return CardDal.get(id);
    }

    static async getAll(ids: string[]) {
        return CardDal.getAll(ids);
    }

    static async getByDeckId(deckId: string) {
        let cards = await CardDal.getByDeckId(deckId);
        return cards ? cards : [];
    }
}
