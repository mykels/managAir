import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Board } from "../types/board";
import { boards } from "./board.mock";

@Injectable()
export class BoardService {
    private board$: BehaviorSubject<Board> = new BehaviorSubject<Board>(undefined);
    private boards$: BehaviorSubject<Board[]> = new BehaviorSubject<Board[]>([]);

    getAll(): Observable<Board[]> {
        this.boards$.next(boards);

        return this.boards$;
    }

    get(id: string): Observable<Board> {
        this.board$.next(boards.filter(board => board.id === id)[0]);
        return this.board$;
    }
}
