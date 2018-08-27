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
// TODO: Option 6 is optimal here because publisher and author have a many-many ratio. Authors can have many publishers and publishers
// can have many authors. Therefore, we need a separate table to keep track of the multiple connections every primary key from both tables have.

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// TODO: Option 4 is optimal here because publisher and genre have a many-one ratio. Genres can have many publishers but each publisher
// can only have 1. Therefore, we have a foreign key within the publisher's table referencing the genre's primary key id.

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// TODO: Option 6 is optimal here because genre and author have a many-many ratio. Authors can have many genres and genres
// can have many authors. Therefore, we need a separate table to keep track of the multiple connections every primary key from both tables have.
