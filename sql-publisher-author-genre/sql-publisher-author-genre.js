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

var sqlPublisherAuthorSchema =  Schemas.FIX_ME; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// Option 6 ... we want to show a many to many relationship  

var sqlPublisherGenreSchema =  Schemas.FIX_ME; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// Option 5 ... we want to show that a publisher has one genre (so include genre_id) and that one genre could have many publishers (so include publisher_id)

var sqlAuthorGenreSchema =  Schemas.FIX_ME; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// Option 6 ... we want to create a many to many relationship between authors and genres...  therefore we use a join table
