export class PracticalApplyModel {
  standingLongJump: string; //제자리 멀리뛰기
  surgentJump: string; //서전트 점프
  sitFlexibility: string; // 좌전굴
  standingFlexibility: string; //체전굴
  throwingMedicineBall: string; //메디신볼 던지기
  throwingHandball: string; //핸드볼공던지기
  sitUp: string; //싯업
  backMuscleStrength: string; //배근력
  pullUp: string; //턱걸이

  constructor(standingLongJump: string, surgentJump: string, sitFlexibility: string, standingFlexibility: string, throwingMedicineBall: string, throwingHandball: string, sitUp: string, backMuscleStrength: string, pullUp: string) {
    this.standingLongJump = standingLongJump;
    this.surgentJump = surgentJump;
    this.sitFlexibility = sitFlexibility;
    this.standingFlexibility = standingFlexibility;
    this.throwingMedicineBall = throwingMedicineBall;
    this.throwingHandball = throwingHandball;
    this.sitUp = sitUp;
    this.backMuscleStrength = backMuscleStrength;
    this.pullUp = pullUp;
  }
}
