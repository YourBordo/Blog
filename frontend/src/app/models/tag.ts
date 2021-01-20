export class Tag {
  id: number;
  tagMessage: string;

  constructor(id?: number, tagMessage?: string) {
    this.id = id;
    this.tagMessage = tagMessage;
  }
}
