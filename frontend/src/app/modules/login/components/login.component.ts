import {Component, OnInit} from "@angular/core";
import {User} from "../../../models/user";
import {Login} from "../../../models/login";
import {AuthToken, UserService} from "../../../services/user.service";
import {StorageService} from "../../../services/storage.service";

@Component({
  selector: "app-login",
  styleUrls: ["./login.component.css"],
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {

  public loginModel: Login = {};
  public showCheckYourSetDataAlert: boolean = false;

  constructor( public storageService: StorageService,
               private userService: UserService) {
  }

  ngOnInit() {
  }

  public onSubmit(): void {
    this.userService.generateToken(this.loginModel)
      .subscribe((authToken: AuthToken) => {
        if (authToken.token) {
          this.storageService.setToken(authToken.token);
          //console.log(this.loginModel);
          this.userService.getAuthorizedUser()
            .subscribe((userModel: User) => {
              this.storageService.setCurrentUser(userModel);

            });
        }
      }, (error) => {
        if (error.status === 401) {
          this.showCheckYourSetDataAlert = true;
        } else {
          alert(error.message);
        }
      });

  }

  public logout(): void {
    this.storageService.clearToken();
    this.storageService.setCurrentUser(null);
  }

}
