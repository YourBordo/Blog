import {Component, OnChanges, OnInit} from "@angular/core";
import {ArticleService} from "../../../services/article.service";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../models/user";
import {ArticleStatus} from "../../../models/enums/article-status";
import {Article} from "../../../models/article";
import {StorageService} from "../../../services/storage.service";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  public user: User = new User();
  public PAGE: number = 0;
  public ITEMS_PER_PAGE: number = 10;

  constructor(private articleService: ArticleService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              public storageService: StorageService) {
    this.user.id = activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.userService.getUser(this.user.id).subscribe(responseUser => {
      this.user = responseUser;
      if (!this.storageService.getCurrentUser()) {
        this.removeDraftArticles();
      }
    })
  }

  removeDraftArticles(): void {

    this.user.articles.forEach(article => {
      if (article.articleStatus == ArticleStatus.DRAFT) {
        this.user.articles.splice(this.user.articles.indexOf(article), 1);
      }
    });

    if (this.hasDraft(this.user.articles)) {
      this.removeDraftArticles();
    }
  }

  hasDraft(articles: Article[]): boolean {
    let flag: boolean = false;
    articles.forEach(article => {
      if (article.articleStatus == ArticleStatus.DRAFT) {
        flag = true;
      }
    });
    return flag;
  }
}
