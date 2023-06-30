import { classToPlain, Expose, plainToClass } from 'class-transformer';

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
    return plainToClass(UserModel, data, { excludeExtraneousValues: true });
  }

  toJSON = data => {
    classToPlain(data);
  };

  translateGender = () => {
    if (this.gender === 'male') return '남성';
    if (this.gender === 'female') return '여성';
  };

  translateGrade = () => {
    if (this.grade === 'high1') return '고1';
    if (this.grade === 'high2') return '고2';
    if (this.grade === 'high3') return '고3';
    if (this.grade === 'high4') return '재수이상';
  };
}
