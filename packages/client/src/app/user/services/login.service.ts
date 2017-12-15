import { Injectable, OnInit } from "@angular/core";
import { User } from "../types/user";
import { micha } from "../../board/services/board.mock";

@Injectable()
export class LoginService implements OnInit {
    loggedInUser: User;

    constructor() {
        this.loggedInUser = micha;
    }

    ngOnInit(): void {
    }

    login() {

    }

    getLoggedInUser(): User {
        return this.loggedInUser;
    }
}