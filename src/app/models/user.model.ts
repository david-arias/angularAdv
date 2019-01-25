
export class User {

     constructor(
          public userName: string,
          public userMail: string,
          public userPsswrd: string,
          public img?: string,
          public role?: string,
          public google?: boolean,
          public _id?: string
     ) { }
     
}