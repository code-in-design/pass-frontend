export class RegionModel {
  id: number;
  name: string;
  entire: string; //전체
  seoul: string; //서울
  gyeongGi: string; //경기
  inCheon: string; //인천
  gyeongNam: string; //경남
  gyeongBuk: string; //경북
  gangWonJeju: string; //강원제주
  gwangJu: string; //광주
  jeolLa: string; //전라
  chungCheong: string; //충청

  constructor(id: number, name: string, entire: string, seoul: string, gyeongGi: string, inCheon: string, gyeongNam: string, gyeongBuk: string, gangWonJeju: string, gwangJu: string, jeolLa: string, chungCheong: string) {
    this.id = id;
    this.name = name;
    this.entire = entire;
    this.seoul = seoul;
    this.gyeongGi = gyeongGi;
    this.inCheon = inCheon;
    this.gyeongNam = gyeongNam;
    this.gyeongBuk = gyeongBuk;
    this.gangWonJeju = gangWonJeju;
    this.gwangJu = gwangJu;
    this.jeolLa = jeolLa;
    this.chungCheong = chungCheong;
  }
}
