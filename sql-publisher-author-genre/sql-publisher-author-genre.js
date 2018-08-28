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
// Option 6 ... we want to show a many to many relationship  

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// Option 4 ... this is a one to many relationship (Publishers (many) <-----> Genres (one))
// Therefore, we want to include the genre_id on the publisher table 
// This means each publisher row will have one genre_id value which will point to the primary key of the genre table. 

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// Option 6 ... we want to create a many to many relationship between authors and genres...  therefore we use a join table
