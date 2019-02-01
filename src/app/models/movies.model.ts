

export class Movie {

     constructor(
          public movieName: string,
          public company: string,
          public moviePoster?: string,
          public movieBackdrop?: string,
          public movieYear?: number,
          public movieRating?: number,
          public movieOverview?: string,
          public user?: string,
          public _id?: string
     ) { }
     
}