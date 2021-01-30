import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {ProfileComponent} from "./components/profile.component";
import {RouterModule} from "@angular/router";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";
import {ArticlesModule} from "../articles/articles.module";

@NgModule({
  declarations: [
    ProfileComponent
  ],
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule,
        NgxPaginationModule,
        FormsModule,
        ArticlesModule

    ],
  providers: [],
  exports: [ProfileComponent]
})
export class ProfileModule {}
