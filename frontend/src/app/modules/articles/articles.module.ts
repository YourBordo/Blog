import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {ArticlesComponent} from "./components/articles.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  exports: [ArticlesComponent]
})
export class ArticlesModule
{}
