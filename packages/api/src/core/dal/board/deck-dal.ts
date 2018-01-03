import { QueryExecutor } from "../query-executor";

export class DeckDal {
    static async getAll(ids: string[]) {
        let idsCondition = ids ? `where id in (${ids.map(id => `'${id}'`).join(",")})` : '';
        return QueryExecutor.execute(`select * from public.deck ${idsCondition}`);
    }

    static async getByBoardId(boardId: string) {
        return QueryExecutor.execute(`select * from public.deck where board_id='${boardId}'`);
    }
}
