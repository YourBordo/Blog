import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {WallComponent} from "./components/wall.component";
import {NgxPaginationModule} from "ngx-pagination";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ArticlesModule} from "../articles/articles.module";

@NgModule({
  declarations: [
    WallComponent
  ],
    imports: [
        CommonModule,
        BrowserModule,
        NgxPaginationModule,
        RouterModule,
        FormsModule,
        ArticlesModule
    ],
  providers: [],
  exports: [WallComponent]
})
export class WallModule {}
