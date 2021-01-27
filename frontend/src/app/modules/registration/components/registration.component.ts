import {Component, OnInit} from "@angular/core";
import {StorageService} from "../../../services/storage.service";
import {AuthToken, UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {User} from "../../../models/user";
import {Login} from "../../../models/login";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {

  public userModel: User = new User();
  public loginModel: Login = {};
  myDate = new Date();


  constructor(public storageService: StorageService,
              private userService: UserService,
              private router: Router,
              private datePipe: DatePipe) {
    this.userModel.createdAt = this.datePipe.transform(this.myDate, 'yyyy-MM-dd hh:mm');
  }

  public onSubmit(): void {
    this.loginModel.password = this.userModel.password;
    this.loginModel.username = this.userModel.email;
    this.userService.addUser(this.userModel).subscribe(user => {
      this.authorize();
    }, (error) => {
        alert(error.message);
    });
  }

  authorize(): void {
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
