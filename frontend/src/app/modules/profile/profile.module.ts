import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {ProfileComponent} from "./components/profile.component";

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  exports: [ProfileComponent]
})
export class ProfileModule {}
