import {Sort} from "./enums/sort";
import {Order} from "./enums/order";

export class Page<T> {
  content: T[] = [];
  totalPages: number = 0;
  pageNumber: number = 0;
  pageSize: number = 2;
  sort: Sort = Sort.TITLE;
  order: Order = Order.DESC;
}
