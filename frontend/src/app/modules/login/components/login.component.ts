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
export class LoginComponent {

  public loginModel: Login = {};
  public userModel: User = new User();
  public validData: boolean = true;

  constructor(public storageService: StorageService,
              private userService: UserService,
              private router: Router) {
    this.userModel.email = null;
    this.userModel.password = null;
  }

  public onSubmit(): void {
    this.validData = this.userModel.email && this.userModel.email.length <= 31
      && this.userModel.password && this.userModel.password.length <= 15;
    if (this.validData) {
      this.loginModel.username = this.userModel.email;
      this.loginModel.password = this.userModel.password;
      this.userService.generateToken(this.loginModel)
        .subscribe((authToken: AuthToken) => {
          if (authToken.token) {
            this.storageService.setToken(authToken.token);
            this.userService.getAuthorizedUser()
              .subscribe((user: User) => {
                this.storageService.setCurrentUser(user);
                this.router.navigate(['profile/' + user.id]).then();
              });
          }
        }, (error) => {
          alert(error.message);
        });
    }else{
      this.validData = false;
    }
  }


}
