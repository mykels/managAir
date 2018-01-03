import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import 'rxjs/add/operator/map'
import { Observable } from "rxjs/Observable";
import { boardQuery } from "../graphql/queries/board.query";
import { myBoardsQuery } from "../graphql/queries/my-boards.query";
import { Board } from "../types/board";

@Injectable()
export class BoardService {
    constructor(private apollo: Apollo) {

    }

    getMyBoards(): Observable<Board[]> {
        return this.apollo.watchQuery({
            query: myBoardsQuery
        }).valueChanges.map(
            ({data, loading}) => {
                return (data as any).me.boards as Board[];
            }
        );
    }

    get(id: string): Observable<Board> {
        return this.apollo.watchQuery({
            query: boardQuery,
            variables: {id}
        }).valueChanges.map(
            ({data, loading}) => {
                console.info("boardQuery board: ", (data as any).board as Board);
                return (data as any).board as Board;
            }
        );
    }
}
