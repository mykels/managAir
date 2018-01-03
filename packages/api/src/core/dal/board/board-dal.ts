import { QueryExecutor } from "../query-executor";

export class BoardDal {
    static async get(id: string) {
        let [board] = await QueryExecutor.execute(`select * from public.board where id='${id}'`);
        return board;
    }

    static async getAll() {
        return QueryExecutor.execute(`select * from public.board`);
    }

    static async getByUserId(userId: string) {
        return QueryExecutor.execute(`select * from public.board where owner='${userId}'`);
    }
}
