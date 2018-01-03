import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { BoardService } from "../../services/board.service";
import { Board } from "../../types/board";

@Component({
    selector: 'mng-board-page',
    templateUrl: './board-page.component.html',
    styleUrls: ['./board-page.component.scss']
})
export class BoardPageComponent implements OnInit {
    private board$: Observable<Board>;

    constructor(private activeRoute: ActivatedRoute,
                private boardService: BoardService) {
    }

    ngOnInit() {
        this.initBoard();
    }

    initBoard() {
        this.activeRoute.params.subscribe(params => {
            console.log("getting board with id " + params.id);
            this.board$ = this.boardService.get(params.id);
        });
    }
}
