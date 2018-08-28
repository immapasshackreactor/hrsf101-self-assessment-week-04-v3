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

var sqlPublisherAuthorSchema =  Schemas.OPTION_3; // TODO: Update this constant
//This is a one to one relationship, we need the foreign key in the author to 
//help keep track and organized

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
//Many to one relationship. we need the foreign key in the publishers table to
//help keep track.

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// Since there are many publishers and many authors for one genre, need to have a
//seperate table for their foreign keys to keep better organized 
