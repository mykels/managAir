import { Component, Input, OnInit } from '@angular/core';
import { CommentActivity } from "../../types/activity/comment-activity";
import { User } from 'app/user/types/user';

@Component({
    selector: 'mng-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
    @Input() activity: CommentActivity;
    @Input() user: User;

    constructor() {
    }

    ngOnInit() {
    }
}
