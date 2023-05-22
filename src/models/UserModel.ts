import { useGetMeQuery } from '@/features/auth/authApi';

export class UserModel {
  userName: string;
  userAvatar?: string;
  membership: string;
  userEmail: string;
  constructor(userName: string, membership: string, userEmail: string, userAvatar?: string) {
    this.userName = userName;
    this.membership = membership;
    this.userEmail = userEmail;
  }
}
