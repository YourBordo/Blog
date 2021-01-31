import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArticleModule} from "./modules/article/article.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ArticleRedactionModule} from "./modules/article-redaction/article-redaction.module";
import {HeaderModule} from "./modules/header/header.module";
import {LoginModule} from "./modules/login/login.module";
import {ProfileModule} from "./modules/profile/profile.module";
import {RegistrationModule} from "./modules/registration/registration.module";
import {SearchModule} from "./modules/search/search.module";
import {WallModule} from "./modules/wall/wall.module";
import {RouterModule, Routes} from "@angular/router";
import {ArticleComponent} from "./modules/article/components/article.component";
import {ArticleRedactionComponent} from "./modules/article-redaction/components/article-redaction.component";
import {HeaderComponent} from "./modules/header/components/header.component";
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
import {APIInterceptor} from "./interseptors/api-interceptor";
import {FooterModule} from "./modules/footer/footer.module";
import {ArticlesModule} from "./modules/articles/articles.module";

const appRoutes: Routes = [
  {path: 'article/:id', component: ArticleComponent},
  {path: 'article/:id/redact', component: ArticleRedactionComponent},
  {path: 'enter', component: HeaderComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'create/article', component: AddArticleComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'search', component: SearchComponent},
  {path: 'wall', component: WallComponent},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ArticleModule,
    ArticleRedactionModule,
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
    RouterModule.forRoot(appRoutes),
    FooterModule,
    HeaderModule,
    ArticlesModule

  ],
  providers: [APIInterceptor, {
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
