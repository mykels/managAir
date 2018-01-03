import { BoardBL } from "../../../core/bl/board/board-bl";

export async function board(board, {id}: { id: string }) {
    console.log(`Resolving board [${id}]`);
    return BoardBL.get(id);
}
