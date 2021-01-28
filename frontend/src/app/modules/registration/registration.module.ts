import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {RegistrationComponent} from "./components/registration.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ConfirmNodule} from "../confirm/confirm.nodule";

@NgModule({
  declarations: [
    RegistrationComponent
  ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        ConfirmNodule
    ],
  providers: [],
  exports: [RegistrationComponent]
})
export class RegistrationModule {}
