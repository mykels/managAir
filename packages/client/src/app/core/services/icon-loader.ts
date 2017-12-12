import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

const ICONS = [
    'main-logo',
    'bell',
    'plus',
    'previous',
    'dots',
    'exit',
    'comment',
    'list'
];

@Injectable()
export class IconLoader {
    constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {

    }

    load() {
        ICONS.forEach(icon => this.loadSvgIcon(icon));
    }

    private loadSvgIcon(iconName: string) {
        this.iconRegistry.addSvgIcon(
            iconName,
            this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${iconName}.svg`)
        );
    }
}
