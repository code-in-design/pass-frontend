export class UserModel {
  id?: number;
  type?: string;
  name?: string;
  phone?: string;
  membership?: string;
  email?: string;
  address?: string;
  gender?: string;
  grade?: string;
  zonecode?: string;
  kakaoId?: string;
  naverId?: string;
  userAvatar?: string;

  constructor(id?: number, type?: string, name?: string, phone?: string, membership?: string, email?: string, address?: string, gender?: string, grade?: string, zonecode?: string, kakaoId?: string, naverId?: string, userAvatar?: string) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.phone = phone;
    this.membership = membership;
    this.email = email;
    this.address = address;
    this.gender = gender;
    this.grade = grade;
    this.zonecode = zonecode;
    this.kakaoId = kakaoId;
    this.naverId = naverId;
    this.userAvatar = userAvatar;
  }

  formatHeader = data => {
    return {
      name: data.name,
      email: data.email,
      membership: data.membership,
    };
  };

  formatMyAccount = data => {
    return {
      name: data.name,
      email: data.email,
      grade: data.grade,
      gender: data.gender,
    };
  };
}
