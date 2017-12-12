import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Deck } from "../../../deck/types/deck";
import { Card } from "../../types/card";

@Component({
    selector: 'mng-card-dialog',
    templateUrl: './card-dialog.component.html',
    styleUrls: ['./card-dialog.component.scss']
})
export class CardDialogComponent implements OnInit {
    card: Card;
    ownerDeck: Deck;

    constructor(private dialogRef: MatDialogRef<CardDialogComponent>,
                @Inject(MAT_DIALOG_DATA) private dialogParams: { card: Card, ownerDeck: Deck }) {
    }

    ngOnInit() {
        this.card = this.dialogParams.card;
        this.ownerDeck = this.dialogParams.ownerDeck;

    }

    onClose() {
        this.dialogRef.close();
    }
}
