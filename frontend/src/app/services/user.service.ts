import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {Injectable} from "@angular/core";


@Injectable()
export class UserService {

  private url = '/api/user/';

  constructor(private http: HttpClient) {
  }
  public getUser(userId: number): Observable<User> {
    return this.http.get<User>(this.url + userId);
  }
  public getUserByArticleId(id: number): Observable<User> {
    return this.http.get<User>(this.url +"article/" + id);
  }
  public getUserByCommentId(id: number): Observable<User> {
    return this.http.get<User>(this.url + "comment/" + id);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  public deleteUser(userId: number): Observable<{}> {
    return this.http.delete(this.url + userId);
  }

}
