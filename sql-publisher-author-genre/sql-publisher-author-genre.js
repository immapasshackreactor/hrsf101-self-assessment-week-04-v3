var Schemas = {
  FIX_ME: 'wrong answer',
  OPTION_0: 'option 0',
  OPTION_1: 'option 1',
  OPTION_2: 'option 2',
  OPTION_3: 'option 3',
  OPTION_4: 'option 4',
  OPTION_5: 'option 5',
  OPTION_6: 'option 6'
};

var sqlPublisherAuthorSchema =  Schemas.OPTION_6; // TODO: Update this constant
// Many authors and only one genre: you don't want to put more than one thing in the same column per row, 
// so adding the publisher id and author id makes sense

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// Has many publishers, has many genres: because one author can have both many publishers and genres, linking
//genre id to publisher minimizes size

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// Has many publishers, has many authors: because one genre can have multiple pubishers and authors,  creating
// a join table for genre countaing the publisher and author to see the proper relation for each makes
// the most sense
