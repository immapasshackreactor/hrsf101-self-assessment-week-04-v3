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

var sqlPublisherAuthorSchema =  Schemas.OPTION_6 // TODO: Update this constant
//authors and publishers have a many to many relationship, so we need to create a table to keep store IDs for both

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
//publishers can only have one genre, so we need to store genre IDs in the publisher table
var sqlAuthorGenreSchema =  Schemas.OPTION_6; 
//authors and publishers have a many to many relationship, so we need to create a table to keep store IDs for both
