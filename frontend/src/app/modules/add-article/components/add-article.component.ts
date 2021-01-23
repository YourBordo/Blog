import {Component, OnInit} from "@angular/core";
import {ArticleService} from "../../../services/article.service";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Article} from "../../../models/article";
import {Tag} from "../../../models/tag";

@Component({
  selector: 'add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})

export class AddArticleComponent implements OnInit {
  public CURRENT_USER_ID: number = 1;
  public article: Article = new Article();
  public tags: Tag[];

  constructor(private articleService: ArticleService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {

  }

  addArticle(): void{

  }
}
