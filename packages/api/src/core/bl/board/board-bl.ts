import { BoardDal } from "../../dal/board/board-dal";

export class BoardBL {
    static async get(id: string) {
        return BoardDal.get(id);
    }

    static async getByUserId(userId: string) {
        return BoardDal.getByUserId(userId);
    }
}
