import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BoardService } from "../../services/board.service";
import { Board } from "../../types/board";

@Component({
    selector: 'mng-board-page',
    templateUrl: './board-page.component.html',
    styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit {
    private board: Board;

    constructor(private activeRoute: ActivatedRoute,
                private boardService: BoardService) {
    }

    ngOnInit() {
        this.initBoard();
    }

    initBoard() {
        this.activeRoute.params.subscribe(params => {
            this.boardService.get(params.id).subscribe(board => {
                this.board = board;
            });
        });
    }
}
