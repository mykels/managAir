import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'mng-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
    @Input() imageUrl?: string;

    constructor() {
    }

    ngOnInit() {
    }
}
