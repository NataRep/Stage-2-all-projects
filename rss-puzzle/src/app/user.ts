class User {
  name: string;

  surname: string;

  level: number;

  round: number;

  constructor(userName: string, userSurname: string, level: number, round: number) {
    this.name = userName;
    this.surname = userSurname;
    this.level = level;
    this.round = round;
  }
}
export default User;
