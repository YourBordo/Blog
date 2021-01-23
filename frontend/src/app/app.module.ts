import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ArticleModule} from "./modules/article/article.module";
import {HttpClientModule} from "@angular/common/http";
import {ArticleRedactionModule} from "./modules/article-redaction/article-redaction.module";
import {EnterModule} from "./modules/enter/enter.module";
import {ForgotPasswordModule} from "./modules/forgot-password/forgot-password.module";
import {LoginModule} from "./modules/login/login.module";
import {ProfileModule} from "./modules/profile/profile.module";
import {RegistrationModule} from "./modules/registration/registration.module";
import {SearchModule} from "./modules/search/search.module";
import {WallModule} from "./modules/wall/wall.module";
import {RouterModule, Routes} from "@angular/router";
import {ArticleComponent} from "./modules/article/components/article.component";
import {ArticleRedactionComponent} from "./modules/article-redaction/components/article-redaction.component";
import {EnterComponent} from "./modules/enter/components/enter.component";
import {ForgotPasswordComponent} from "./modules/forgot-password/components/forgot-password.component";
import {LoginComponent} from "./modules/login/components/login.component";
import {ProfileComponent} from "./modules/profile/components/profile.component";
import {RegistrationComponent} from "./modules/registration/components/registration.component";
import {SearchComponent} from "./modules/search/components/search.component";
import {WallComponent} from "./modules/wall/components/wall.component";
import {NotFoundModule} from "./modules/not-found/not-found.module";
import {NotFoundComponent} from "./modules/not-found/components/not-found.component";
import {CommentsModule} from "./modules/comments/comments.module";
import {AddCommentModule} from "./modules/add-comment/add-comment.module";
import {AddArticleModule} from "./modules/add-article/add-article.module";
import {AddArticleComponent} from "./modules/add-article/components/add-article.component";
import {TagsModule} from "./modules/tags/tags.module";

const appRoutes: Routes =[
  { path: 'article/:id', component: ArticleComponent},
  { path: 'article/:id/redact', component: ArticleRedactionComponent},
  { path: 'enter', component: EnterComponent },
  { path: 'forgot', component: ForgotPasswordComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'create/article', component: AddArticleComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'search', component: SearchComponent},
  { path: 'wall', component: WallComponent},
  { path: '**', component: NotFoundComponent},

];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ArticleModule,
    ArticleRedactionModule,
    EnterModule,
    ForgotPasswordModule,
    LoginModule,
    ProfileModule,
    RegistrationModule,
    SearchModule,
    WallModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NotFoundModule,
    CommentsModule,
    AddCommentModule,
    AddArticleModule,
    TagsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
