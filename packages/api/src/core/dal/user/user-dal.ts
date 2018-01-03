import { QueryExecutor } from "../query-executor";

export class UserDal {
    static async get(id: string) {
        let [user] = await QueryExecutor.execute(`select * from public.user where id='${id}'`);
        return user;
    }

    static async getAll(ids: string[]) {
        let idsCondition = ids ? `where id in (${ids.map(id => `'${id}'`).join(",")})` : '';
        return QueryExecutor.execute(`select * from public.user ${idsCondition}`);
    }
}
