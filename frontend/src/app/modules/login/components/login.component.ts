import {Component, OnInit} from "@angular/core";
import {User} from "../../../models/user";
import {Login} from "../../../models/login";
import {AuthToken, UserService} from "../../../services/user.service";
import {StorageService} from "../../../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: "login",
  styleUrls: ["./login.component.css"],
  templateUrl: "./login.component.html"
})
export class LoginComponent{

  public loginModel: Login = {};

  constructor( public storageService: StorageService,
               private userService: UserService,
               private router: Router) {
  }

  public onSubmit(): void {
    this.userService.generateToken(this.loginModel)
      .subscribe((authToken: AuthToken) => {
        if (authToken.token) {
          this.storageService.setToken(authToken.token);
          //console.log(this.loginModel);
          this.userService.getAuthorizedUser()
            .subscribe((user: User) => {
              this.storageService.setCurrentUser(user);
              this.router.navigate(['profile/' + user.id]).then();
            });
        }
      }, (error) => {
          alert(error.message);
      });

  }


}
