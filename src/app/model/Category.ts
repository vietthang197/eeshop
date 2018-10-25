export class Category {
  private id: number;
  private description: string;
  private image: string;
  private name: string;


  constructor() {
  }

  get _id(): number {
    return this.id;
  }

  set _id(value: number) {
    this.id = value;
  }

  get _description(): string {
    return this.description;
  }

  set _description(value: string) {
    this.description = value;
  }

  get _image(): string {
    return this._image;
  }

  set _image(value: string) {
    this.image = value;
  }

  get _name(): string {
    return this.name;
  }

  set _name(value: string) {
    this.name = value;
  }
}
