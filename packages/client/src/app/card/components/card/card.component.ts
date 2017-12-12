import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";
import { Deck } from 'app/deck/types/deck';
import { Card } from "../../types/card";
import { CardDialogComponent } from "../card-dialog/card-dialog.component";

@Component({
    selector: 'mng-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() card: Card;
    @Input() ownerDeck: Deck;

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {
    }

    onCardClick() {
        this.dialog.open(CardDialogComponent, {
            data: {
                card: this.card,
                ownerDeck: this.ownerDeck
            },
        });
    }
}
