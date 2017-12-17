import { Component, OnInit } from '@angular/core';
import { IconLoader } from "./core/services/icon-loader";

@Component({
    selector: 'mng-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    constructor(private iconLoader: IconLoader) {
    }

    ngOnInit(): void {
        this.loadSvgIcons();
    }

    loadSvgIcons() {
        this.iconLoader.load();
    }
}
