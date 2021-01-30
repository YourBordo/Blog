import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../models/article";
import {Page} from "../models/page";
import {Injectable} from "@angular/core";
import {Tag} from "../models/tag";

@Injectable()
export class ArticleService {

  private url = '/api/article/';

  constructor(private http: HttpClient) {
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url);
  }

  public getArticle(articleId: number): Observable<Article> {
    return this.http.get<Article>(this.url + articleId);
  }

  public getArticlesByUserId(userId: number): Observable<Article[]> {
    return this.http.get<Article[]>(this.url + "user/" + userId);
  }

  public getArticlesByTagId(tagId: number): Observable<Article[]> {
    return this.http.get<Article[]>(this.url + "tag/" + tagId);
  }

  public getArticlesPage(page: Page<Article>): Observable<Page<Article>> {
    const params = ArticleService.getParams(page);
    return this.http.get<Page<Article>>(this.url, {params});
  }

  public getArticlesPageByUserId(userId: number, page: Page<Article>): Observable<Page<Article>> {
    const params = ArticleService.getParams(page);
    return this.http.get<Page<Article>>(this.url + userId + '/', {params});
  }

  public saveArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.url, article);
  }

  public updateArticle(article: Article): Observable<Article> {
    return this.http.put<Article>(this.url, article);
  }

  public deleteArticle(articleId: number): Observable<{}> {
    return this.http.delete(this.url + articleId);
  }

  private static getParams(page: Page<Article>): HttpParams {
    return new HttpParams()
      .set('page', page.pageNumber.toString())
      .set('size', page.pageSize.toString())
      .set('sort', page.sort.toString())
      .set('order', page.order.toString());
  }

  public getArticlesLike(title: string): Observable<Article[]> {
    return this.http.get<Article[]>(this.url + "title=" + title);
  }

}
