import {Component, Input} from "@angular/core";
import {AuthToken, UserService} from "../../../services/user.service";
import {User} from "../../../models/user";
import {StorageService} from "../../../services/storage.service";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {Login} from "../../../models/login";

@Component({
  selector: 'confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})

export class ConfirmComponent {

  @Input() user;
  public userModel: User = new User();
  public loginModel: Login = {};
  public code: string;
  public codeIsValid: boolean = true;

  myDate = new Date();


  constructor(public storageService: StorageService,
              private userService: UserService,
              private router: Router,
              private datePipe: DatePipe) {
    this.userModel.createdAt = this.datePipe.transform(this.myDate, 'yyyy-MM-dd hh:mm');
  }

  public onSubmitCode(): void {
    //add IF for time valid
    if (this.code == this.storageService.currentEmailToken) {
      this.codeIsValid = true;
      this.userModel.firstName = this.user.firstName;
      this.userModel.lastName = this.user.lastName;
      this.userModel.email = this.user.email;
      this.userModel.password = this.user.password;
      this.loginModel.password = this.userModel.password;
      this.loginModel.username = this.userModel.email;
      this.userService.addUser(this.userModel).subscribe(user => {
        this.authorize();
      }, (error) => {
        alert(error.message);
      });
    }else{
      this.codeIsValid = false;
    }


  }

  authorize(): void {
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

  }
}
