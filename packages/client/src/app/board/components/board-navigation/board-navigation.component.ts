import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { BoardService } from "../../services/board.service";
import { Board } from "../../types/board";

@Component({
    selector: 'mng-board-navigation',
    templateUrl: './board-navigation.component.html',
    styleUrls: ['./board-navigation.component.scss']
})
export class BoardNavigationComponent implements OnInit {

    boards$: Observable<Board[]>;

    constructor(private boardService: BoardService, private router: Router) {
    }

    ngOnInit() {
        this.boards$ = this.boardService.getAll();
    }

    onBoardClick(board: Board) {
        this.router.navigate(['board', board.id]);
    }

}
