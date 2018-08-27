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
//It's a many to many relationship so it should use the foreign key id relationship table

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
//It's a many to one relationship, so the side which only has the one should hold the foreign key,
//it makes the most sense that way as if it were reversed genre would have an array of keys

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
//It's a many to many relationship so it should use the foreign key id relationship table
