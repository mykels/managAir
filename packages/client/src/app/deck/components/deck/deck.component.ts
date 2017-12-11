import { Component, Input, OnInit } from '@angular/core';
import { Deck } from "../../types/deck";

@Component({
    selector: 'mng-deck',
    templateUrl: './deck.component.html',
    styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
    @Input() deck: Deck;

    constructor() {
    }

    ngOnInit() {
    }
}
