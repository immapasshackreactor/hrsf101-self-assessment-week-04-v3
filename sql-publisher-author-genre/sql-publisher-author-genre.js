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
// This table can list the relationships between authors and genres by relating the data
// from the author and publisher table. There are many authors and many genres
// and they each have many of the other

var sqlPublisherGenreSchema =  Schemas.OPTION_4;
// this table is selected because each each publisher has one genre and it can therefore be listed
// straight with the publisher table

var sqlAuthorGenreSchema =  Schemas.OPTION_6;
// This table is best because many different authors have many different genres, so a join table
// is needed in order to not repeat data anywhere
