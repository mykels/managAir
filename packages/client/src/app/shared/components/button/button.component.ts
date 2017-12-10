import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'mng-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input() title: string = '';
    @Input() icon: string;

    constructor() {
    }

    ngOnInit() {
    }

}
