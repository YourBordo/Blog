export class Tag {
  private _id: number;
  private _tagMessage: string;

  constructor(id?: number, tagMessage?: string) {
    this._id = id;
    this._tagMessage = tagMessage;
  }

  set id(value: number) {
    this._id = value;
  }

  set tagMessage(value: string) {
    this._tagMessage = value;
  }
}
