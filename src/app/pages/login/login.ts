import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { UserData } from "../../providers/user-data";

import { UserOptions } from "../../interfaces/user-options";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { AuthenticationService } from "../../_services/authentication.service";

@Component({
  selector: "page-login",
  templateUrl: "login.html",
  styleUrls: ["./login.scss"],
})
export class LoginPage {
  login: UserOptions = { username: "", password: "" };
  submitted = false;
  returnUrl: string;
  error = "";

  constructor(
    public userData: UserData,
    public router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    if (form.valid) {
      console.log("form validmiş")
      this.authenticationService
        .login(this.login.username, this.login.password)
        .pipe(first())
        .subscribe(
          (data) => {
            this.router.navigate([this.returnUrl]);
          },
          (error) => {
            this.error = error;
          }
        );
    }
  }

  onSignup() {
    this.router.navigateByUrl("/signup");
  }
}
