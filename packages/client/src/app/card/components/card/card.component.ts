import { Component, Input, OnInit } from '@angular/core';
import { Card } from "../../types/card";

@Component({
    selector: 'mng-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() card: Card;

    constructor() {
    }

    ngOnInit() {
    }
}
