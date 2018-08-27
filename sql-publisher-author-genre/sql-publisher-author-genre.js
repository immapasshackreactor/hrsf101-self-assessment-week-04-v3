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

var sqlPublisherAuthorSchema =  Schemas.OPTION_6;
/*
 One publisher has many authors, and one author has many publishers. This is a many-many
 relationship, which requires a join table for efficient storage and access.
*/

var sqlPublisherGenreSchema =  Schemas.OPTION_4;
/*
 One publisher has one genre, and one genre has many publishers. This is a one-to-many
 relationship, which requires the 'many' (publishers) to store the id of their 'one' (genre). 
*/

var sqlAuthorGenreSchema =  Schemas.OPTION_6;
/*
 One author has many genres, and one genre has many authors. This is a many-many
 relationship, which requires a join table for efficient storage and access.
*/