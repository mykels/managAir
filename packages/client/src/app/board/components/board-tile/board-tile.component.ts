import { Component, Input, OnInit } from '@angular/core';
import { Board } from "../../types/board";

@Component({
    selector: 'mng-board-tile',
    templateUrl: './board-tile.component.html',
    styleUrls: ['./board-tile.component.scss']
})
export class BoardTileComponent implements OnInit {
    @Input() board: Board;

    constructor() {
    }

    ngOnInit() {
    }

}
