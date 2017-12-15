import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Comment } from "../../types/comment";
import { User } from "../../types/user";

@Component({
    selector: 'mng-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
    @Input() user?: User; // TODO: better if user would be in store?
    @Output() saved = new EventEmitter<Comment>();

    @ViewChild('commentInput') commentInput;

    comment: Comment;

    constructor() {
    }

    ngOnInit() {
        this.initComment();
    }

    onSave() {
        this.saved.emit(this.comment);
        this.initComment();
    }

    initComment() {
        this.comment = {
            text: ''
        };

        this.focusInput();
    }

    focusInput() {
        this.commentInput.nativeElement.focus();
    }
}
