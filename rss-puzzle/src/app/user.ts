class User {
  name: string;

  surname: string;

  level: number;

  round: number;

  constructor(userName: string, userSurname: string) {
    this.name = userName;
    this.surname = userSurname;
  }
}
export default User;
