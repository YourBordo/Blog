import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tag} from "../models/tag";
import {Article} from "../models/article";
import {Injectable} from "@angular/core";

@Injectable()
export class TagService {

  private url = '/api/tag/';

  constructor(private http: HttpClient) {
  }

  public getTagCloud(): Observable<Map<string, number>> {
    return this.http.get<Map<string, number>>(this.url);
  }

  public getTag(tagId: number): Observable<Tag> {
    return this.http.get<Tag>(this.url + tagId);
  }

  public getTagsLike(tagName: string): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.url + "tagName=" + tagName);
  }

}
