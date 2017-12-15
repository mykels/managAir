import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../../../user/types/user";
import { LoginService } from "../../../user/services/login.service";

@Component({
    selector: 'mng-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    loggedInUser: User; // TODO: better if loggedInUser would be in store
    constructor(private router: Router,
                private loginService: LoginService) {
    }

    ngOnInit() {
        this.loggedInUser = this.loginService.getLoggedInUser();
    }

    onBack() {
        this.router.navigate(['board']);
    }

}
