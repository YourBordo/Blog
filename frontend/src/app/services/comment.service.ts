import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../models/comment";
import {Injectable} from "@angular/core";

@Injectable()
export class CommentService {

  private url = '/api/comment/';

  constructor(private http: HttpClient) {
  }
  public getComment(commentId: number): Observable<Comment> {
    return this.http.get<Comment>(this.url + commentId);
  }

  public getCommentsByUserId(userId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url +"user/"+ userId);
  }

  public getCommentsByArticleId(userId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url +"article/"+ userId);
  }

  public addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.url, comment);
  }

  public deleteComment(commentId: number): Observable<{}> {
    return this.http.delete(this.url + commentId);
  }

}
