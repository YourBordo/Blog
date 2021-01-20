import {Component, OnInit} from "@angular/core";
import {User} from "../../../models/user";
import {Article} from "../../../models/article";
import {ArticleService} from "../../../services/article.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Comment} from "../../../models/comment";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  public article: Article;
  public user: User;
  public comments: Comment[];
  constructor(private articleService: ArticleService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.articleService.getArticle(9).subscribe(article1 =>{
      this.article = article1;
      this.comments = article1.comments;
    });
  }


}
