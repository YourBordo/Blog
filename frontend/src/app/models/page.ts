import {Sort} from "./enums/sort";
import {Order} from "./enums/order";

export class Page<T> {
  content: T[] = [];
  totalPages: number = 0;
  pageNumber: number = 0;
  pageSize: number = 2;
  sort: Sort = Sort.TITLE;
  order: Order = Order.DESC;

  constructor(content?: T[], totalPages?: number, pageNumber?: number,
              pageSize?: number, sort?: Sort, order?: Order) {
    this.content = content;
    this.totalPages = totalPages;
    this.pageNumber = pageNumber;
    this.pageSize = pageSize;
    this.sort = sort;
    this.order = order;
  }
}
