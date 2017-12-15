import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Deck } from "../../../deck/types/deck";
import { Card } from "../../types/card";
import { User } from 'app/user/types/user';
import { LoginService } from "../../../user/services/login.service";
import { CardService } from "../../services/card.service";

@Component({
    selector: 'mng-card-dialog',
    templateUrl: './card-dialog.component.html',
    styleUrls: ['./card-dialog.component.scss']
})
export class CardDialogComponent implements OnInit {
    card: Card;
    ownerDeck: Deck;
    loggedInUser: User;

    constructor(private dialogRef: MatDialogRef<CardDialogComponent>,
                private cardService: CardService,
                @Inject(MAT_DIALOG_DATA) private dialogParams: { card: Card, ownerDeck: Deck },
                private loginService: LoginService) {
    }

    ngOnInit() {
        this.card = this.dialogParams.card;
        this.ownerDeck = this.dialogParams.ownerDeck;
        this.loggedInUser = this.loginService.getLoggedInUser();
    }

    onNewComment(comment: Comment) {
        this.cardService.saveComment(this.card, comment, this.loggedInUser);
    }

    onClose() {
        this.dialogRef.close();
    }
}
