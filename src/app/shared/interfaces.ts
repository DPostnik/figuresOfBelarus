export interface User
{
  email: string;
  password: string;
  firstName: string;
  username: string;
  lastName: string;
  id?: number;
}

export interface User1
{
  username: string,
  password: string
}

// export interface Card
// {
//   id: number;
//   fullName: string;
//   url: string;
//   text: string;
// }

export interface AuthResponse
{
  id: number,
  username: string,
  token: string
}

// export interface FbAuthResponse
// {
//   idToken: string;
//   expiresIn: string;
// }

export interface Information
{
  achievements: string;
  alias: string;
  attitudeToMarriage: string;
  awards: string;
  biography: string;
  characteristic: string;
  citizenship: string;
  confession: string;
  countryBirth: string;
  countryDeath: string;
  dateBirth: string;
  dateDeath: string;
  education: string;
  ethnos: string;
  faith: string;
  firstName: string;
  friendsAndEnemies: string;
  id?: number;
  lastName: string;
  linksToWebsite: string;
  memberShip: string;
  nationality: string;
  occupation: string;
  patronymic: string;
  placeBirth: string;
  placeBurial: string;
  politic: string;
  profession: string;
  regionBirth: string;
  // url: string;
}

export interface Bibliography
{
  id: number;
  authors: string;
  numberPages: number;
  publicationDate: Date;
  workInfo: string;
  workKind: string;
  workName: string;
  informationId: number;
}

export interface Chronology
{
  id: number;
  date: Date;
  event: string;
  kindChronology: string;
  informationId: number;
}

export interface Education
{
  id: number;
  activity: string;
  country: string;
  dateBegin: Date;
  dateEnd: Date;
  kindEducation: string;
  scienceSchool: string;
  university: string;
  workInSpecialty: string;
  informationId: number;
}

export interface Quotation
{
  date: Date;
  domainQuotation: string;
  id: 0;
  informationId: 0;
  quotation: string;
  work: string;
}

export interface Relatives
{
  dateBirth: string;
  dateDeath: string;
  fullName: string;
  id: 0;
  info: string;
  informationId: 0;
  relation: string;
}

export interface Reviews
{
  authorId: 0;
  dateReviews: string;
  id: 0;
  informationId: 0;
  kindReview: string;
  review: string;
}

export interface PhotoArchive
{
  date: string,
  info: string,
  isMainPhoto: true,
  pathPicture: string
  informationId: number;
}

export interface Card
{
  url: string;
  fullName: string;
  profession: string;
  id: string;
}

export interface Relatives
{

}

export interface WorkPersonality
{

}
