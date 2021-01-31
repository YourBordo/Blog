import {Component, OnInit} from "@angular/core";
import {StorageService} from "../../../services/storage.service";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {

  public userModel: User = new User();
  public submit: boolean = false;
  public validData: boolean = true;
  public suchEmailAlreadyExists: boolean = false;

  constructor(public storageService: StorageService,
              private userService: UserService) {
  }

  public onSubmit(): void {
    this.validData = this.userModel.firstName && this.userModel.firstName.length <= 15
      && this.userModel.lastName && this.userModel.lastName.length <= 15
      && this.userModel.email && this.userModel.email.length <= 31
      && this.userModel.password && this.userModel.password.length <= 15;
    if (this.validData) {
      this.userService.getUserByEmail(this.userModel.email).subscribe(responseUser => {
        if (responseUser) {
          this.suchEmailAlreadyExists = true;
        } else {
          this.suchEmailAlreadyExists = false;
          this.submit = true;
          this.userService.generateEmailToken(this.userModel).subscribe(responseToken => {
            this.storageService.currentEmailToken = responseToken.token;
          })
        }
      })
    } else {
      this.submit = false;
    }
  }
}
