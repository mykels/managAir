import { UserDal } from "../../dal/user/user-dal";

export class UserBL {
    static async get(id: string) {
        return UserDal.get(id);
    }

    static async getAll(ids: string[]) {
        return UserDal.getAll(ids);
    }

    static async getCurrentUser() {
        // TODO: get from active directory of some kind
        const currentUserId = '3040da94-ec68-11e7-958b-1b0251083f5e';
        return UserBL.get(currentUserId);
    }
}
