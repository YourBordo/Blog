export class Tag {
  public id: number;
  public tagName: string;


  constructor(id?: number, tagMessage?: string) {
    this.id = id;
    this.tagName = tagMessage;
  }

}
