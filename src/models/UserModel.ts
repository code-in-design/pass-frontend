export class UserModel {
  userName: string;
  userAvatar: string;
  membership: string;
  userEmail: string;
  constructor(userName: string, userAvatar: string, membership: string, userEmail: string) {
    this.userName = userName;
    this.userAvatar = userAvatar;
    this.membership = membership;
    this.userEmail = userEmail;
  }
}
