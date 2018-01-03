import { Component, OnInit } from '@angular/core';
import { ApolloInitializer } from "./core/services/apollo/apollo-initializer";
import { IconLoader } from "./core/services/icon/icon-loader";

@Component({
    selector: 'mng-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    constructor(private apolloInitializer: ApolloInitializer,
                private iconLoader: IconLoader) {
    }

    ngOnInit(): void {
        this.initApollo();
        this.loadSvgIcons();
    }

    private initApollo() {
        this.apolloInitializer.init();
    }

    private loadSvgIcons() {
        this.iconLoader.load();
    }
}
