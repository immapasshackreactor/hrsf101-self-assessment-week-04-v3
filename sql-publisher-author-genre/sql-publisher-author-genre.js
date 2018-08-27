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
// many to many relationships need to link via another table

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// Publisher to Genre is a one to many. the link will go on the publisher side because they only have one.

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// also many to many relationship. need another table to link
