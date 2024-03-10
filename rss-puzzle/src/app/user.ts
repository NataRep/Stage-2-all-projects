class User {
  userName: string;

  userSername: string;

  level: number;

  round: number;

  constructor(userName: string, userSername: string, level: number, round: number) {
    this.userName = userName;
    this.userSername = userSername;
    this.level = level;
    this.round = round;
  }
}
export default User;
