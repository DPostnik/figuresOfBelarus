export interface FigureName
{
  firstName: string;
  lastName: string;
  patronymicName: string;
  pseudonym: string;
}

export interface FigureBirth
{
  birthDate: Date;
  birthCountry: string;
  birthRegion: string;
  birthPlace: string;
}

export interface FigureDeath
{
  deathDate: Date;
  deathCountry: string;
  burialPlace: string;
}

export interface FigureInfo{
  nationality: string;
  citizenship: string;
  ethnicity: string;
  confessionalAffiliation: string;
  profession: string;
  membership: string;
  Awards: string;
  achievements: string;
  characteristic: string;
  faithAndWorldview: string;
  politicalViews: string;
  FriendsAndEnemies: string;
  RelationToMarriage: string;
}

export interface Figure{
  id: number;
}

export interface FigureInformation{

  figureId?: number;

  // figure-name
  firstName: string;
  lastName: string;
  patronymicName: string;
  pseudonym: string;

  // figure-birth
  birthDate: Date;
  birthCountry: string;
  birthRegion: string;
  birthPlace: string;

  // figure-death
  deathDate: Date;
  deathCountry: string;
  burialPlace: string;

  // figure-info
  nationality: string;
  citizenship: string;
  ethnicity: string;
  confessionalAffiliation: string;
  profession: string;
  membership: string;
  Awards: string;
  achievements: string;
  characteristic: string;
  faithAndWorldview: string;
  politicalViews: string;
  FriendsAndEnemies: string;
  RelationToMarriage: string;

  // figure - photo
  url?: string[];
}
