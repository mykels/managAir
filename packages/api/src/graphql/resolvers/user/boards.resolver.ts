import { BoardBL } from "../../../core/bl/board/board-bl";

export async function boards({id}:{id:string}) {
    console.log(`Resolving boards for user [${id}]`);
    return BoardBL.getByUserId(id);
}
