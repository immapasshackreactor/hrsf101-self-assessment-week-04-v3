var Schemas = {
  FIX_ME: 'option 4, option 6, option 6',
  OPTION_0: 'option 0',
  OPTION_1: 'option 1',
  OPTION_2: 'option 2',
  OPTION_3: 'option 3',
  OPTION_4: 'option 4',
  OPTION_5: 'option 5',
  OPTION_6: 'option 6'
};

var sqlPublisherAuthorSchema =  Schemas.FIX_ME; // TODO: Update this constant
/* I selected option 4 because the prompt indicates this is a one-to-many relationship. Hence, author does not need to
   monitor the IDs of its publishers. As there is only one genre, it is irrelevant to the schema.
*/

var sqlPublisherGenreSchema =  Schemas.FIX_ME; // TODO: Update this constant
/* I selected option 6 because the prompt indicates a many-to-many relationship. Thus, I felt that the intermediary table,
   the name of which I forget, would allow us to quickly look-up which authors belonged to which genres (exactly like the
   example Fred gave during lecture regarding classes and students).
*/

var sqlAuthorGenreSchema =  Schemas.FIX_ME; // TODO: Update this constant
/* I selected option 6 for the same reason I selected option 6 for publisher/genre--because of the many-to-many relationship
   this particular table intends on storing.
*/
