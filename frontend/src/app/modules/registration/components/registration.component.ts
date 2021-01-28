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
  public submit: boolean = false;
  public validData: boolean = true;
  public suchEmailAlreadyExists: boolean = false;

  constructor(public storageService: StorageService,
              private userService: UserService
              ) {
  }

  public onSubmit(): void {
    if (this.userModel.firstName && this.userModel.lastName && this.userModel.email && this.userModel.password) {
      this.validData = true;
      this.userService.getUserByEmail(this.userModel.email).subscribe(responseUser => {
        if (responseUser) {
          this.suchEmailAlreadyExists = true;
        }else{
          this.suchEmailAlreadyExists = false;
          this.submit = true;
          this.userService.generateEmailToken(this.userModel).subscribe(responseToken=>{
           this.storageService.currentEmailToken = responseToken.token;
          })
        }
      })

    }else {
      this.submit =false;
      this.validData = false;
    }
  }


}
