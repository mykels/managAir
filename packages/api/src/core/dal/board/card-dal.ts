import { QueryExecutor } from "../query-executor";

export class CardDal {
    static async get(id: string) {
        let [card] = await QueryExecutor.execute(`select * from public.card where id='${id}'`);
        return card;
    }

    static async getAll(ids: string[]) {
        let idsCondition = ids ? `where id in (${ids.map(id => `'${id}'`).join(",")})` : '';
        return QueryExecutor.execute(`select * from public.card ${idsCondition}`);
    }

    static async getByDeckId(deckId: string) {
        return QueryExecutor.execute(`select * from public.card where deck_id='${deckId}'`);
    }
}
