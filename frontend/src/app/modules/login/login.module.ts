import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./components/login.component";
import {UserService} from "../../services/user.service";
import {StorageService} from "../../services/storage.service";
import {FormsModule} from "@angular/forms";
import {APIInterceptor} from "../../interseptors/api-interceptor";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [UserService, StorageService, APIInterceptor],
  exports: [LoginComponent]
})
export class LoginModule {}
