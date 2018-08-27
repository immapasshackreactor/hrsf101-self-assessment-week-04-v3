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
  Since Publishers and Authors have many to many relationships, it would be best to create
  a separate table cointaining the ids of both table connected with each other
  (publisher_id and author_id in one row showing their relationship).
*/

var sqlPublisherGenreSchema =  Schemas.OPTION_4;
/*
  Since Publishers and Genres have a many to one relationship, it would be best to have the
  genre id stored in the publisher table as each publisher only has one genre. Genre table won't`
  have the publisher ids because one genre can have many publishers.
*/

var sqlAuthorGenreSchema =  Schemas.OPTION_6;
/*
  Since Authors and Genres have many to many relationships, it would be best to create
  a separate table cointaining the ids of both table connected with each other
  (author_id and genre_id in one row showing their relationship).
*/
