export class UserRegister {
  private username: string;
  private password: string;
  private confirmPassword: string;
  private email: string;
  private name: string;
  private birthday: Date;
  private phone: string;
  private address1: string;
  private address2: string;

  constructor() {
  }

  get _username(): string {
    return this.username;
  }

  set _username(value: string) {
    this.username = value;
  }

  get _password(): string {
    return this.password;
  }

  set _password(value: string) {
    this.password = value;
  }

  get _confirmPassword(): string {
    return this.confirmPassword;
  }

  set _confirmPassword(value: string) {
    this.confirmPassword = value;
  }

  get _email(): string {
    return this.email;
  }

  set _email(value: string) {
    this.email = value;
  }

  get _name(): string {
    return this.name;
  }

  set _name(value: string) {
    this.name = value;
  }

  get _birthday(): Date {
    return this.birthday;
  }

  set _birthday(value: Date) {
    this.birthday = value;
  }

  get _phone(): string {
    return this.phone;
  }

  set _phone(value: string) {
    this.phone = value;
  }

  get _address1(): string {
    return this.address1;
  }

  set _address1(value: string) {
    this.address1 = value;
  }

  get _address2(): string {
    return this.address2;
  }

  set _address2(value: string) {
    this.address2 = value;
  }
}
