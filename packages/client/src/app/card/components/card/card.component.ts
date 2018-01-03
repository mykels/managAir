import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";
import { Deck } from 'app/deck/types/deck';
import { CardService } from "../../services/card.service";
import { Card } from "../../types/card";
import { CardDialogComponent } from "../card-dialog/card-dialog.component";

@Component({
    selector: 'mng-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() card: Card;
    @Input() cardIndex: number;
    @Input() ownerDeck: Deck;

    constructor(private dialog: MatDialog,
                private cardService: CardService) {
    }

    ngOnInit() {
    }

    onCardClick() {
        this.cardService.getCard(this.card.id).subscribe(fullCard => {
            console.info("Fetched full card", fullCard);
            this.dialog.open(CardDialogComponent, {
                data: {
                    card: fullCard,
                    ownerDeck: this.ownerDeck
                },
            });
        });
    }
}
