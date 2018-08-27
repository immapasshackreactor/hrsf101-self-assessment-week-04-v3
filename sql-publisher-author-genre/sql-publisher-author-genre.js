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
//publisher and author have a many to many relationship which requires a join table that consists of both entities' primary keys as its foreign keys

var sqlPublisherGenreSchema =  Schemas.OPTION_4; 
//the two have a one to many relationship. While a publisher can only have one genre, a genre can have many publishers. 
//this kind of relationship requires a foreign key on the many side (publisher table)


var sqlAuthorGenreSchema =  Schemas.OPTION_6; 
//Authors and Genres have a many to many relationship. As stated above, this kind of relationship requires a join table that consists of two foreign keys. 


// * publisher, has many authors, has one genre
// * author, has many publishers, has many genres
// * genre, has many publishers, has many authors
