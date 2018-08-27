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
//Foreign key ids can be placed in a joined table describing the connections between author and publisher.
  //there author and publisher list can be stored on seperate tables; keeps tables clear as to what they are depicting
// TODO: Write a comment here explaining your choice

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//publishers are only tied to one genre; therre can be multiple publishers tied to a single genre


var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
//This is a many to many relationship; there needs to be a table created to depict the multiple 
//relationships that can exist between and author and different genres
