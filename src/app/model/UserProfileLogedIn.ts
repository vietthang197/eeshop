export class UserProfileLogedIn {
  private _isLogedIn: boolean;
  private _expireDate: string;
  private _createAt: string;
  private _userName: string;
  private _authority: string;

  get isLogedIn(): boolean {
    return this._isLogedIn;
  }

  set isLogedIn(value: boolean) {
    this._isLogedIn = value;
  }

  get expireDate(): string {
    return this._expireDate;
  }

  set expireDate(value: string) {
    this._expireDate = value;
  }

  get createAt(): string {
    return this._createAt;
  }

  set createAt(value: string) {
    this._createAt = value;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get authority(): string {
    return this._authority;
  }

  set authority(value: string) {
    this._authority = value;
  }
}
