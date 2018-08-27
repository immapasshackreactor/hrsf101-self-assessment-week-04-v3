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
// TODO: Write a comment here explaining your choice
//it's a many to many relationship.

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//it's a one to many relationship, where genra could have many publishers. therefore we
//need a foreign key for publisher linking to genre
var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//again, it's a many to many relationship. many authors can have many genres
