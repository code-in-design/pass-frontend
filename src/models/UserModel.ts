import { Expose, plainToClass } from 'class-transformer';

export class UserModel {
  @Expose()
  id?: number;

  @Expose()
  type?: string;

  @Expose()
  name?: string;

  @Expose()
  phone?: string;

  @Expose()
  membership?: string;

  @Expose()
  email?: string;

  @Expose()
  address?: string;

  @Expose()
  gender?: string;

  @Expose()
  grade?: string;

  @Expose()
  zonecode?: string;

  @Expose()
  kakaoId?: string;

  @Expose()
  naverId?: string;

  @Expose()
  userAvatar?: string;

  constructor(data?: Partial<UserModel>) {
    return plainToClass(UserModel, data);
  }

  translateGender = data => {
    if (data === 'male') return (this.gender = '남성');
    if (data === 'female') return (this.gender = '여성');
  };

  translateGrade = data => {
    if (data === 'high1') return (this.grade = '고1');
    if (data === 'high2') return (this.grade = '고2');
    if (data === 'high3') return (this.grade = '고3');
    if (data === 'high4') return (this.grade = '재수이상');
  };
}
