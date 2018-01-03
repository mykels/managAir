import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { BoardService } from "../../services/board.service";
import { Board } from "../../types/board";

@Component({
    selector: 'mng-board-browser',
    templateUrl: './board-browser.component.html',
    styleUrls: ['./board-browser.component.scss']
})
export class BoardBrowserComponent implements OnInit {
    boards$: Observable<Board[]>;

    constructor(private boardService: BoardService, private router: Router) {
    }

    ngOnInit() {
        this.boards$ = this.boardService.getMyBoards();

    }

    onBoardClick(board: Board) {
        this.router.navigate(['board', board.id]);
    }

}
