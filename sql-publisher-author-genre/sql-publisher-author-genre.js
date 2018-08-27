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
// a publisher has many authors and an author can have many publishers so we are looking at a many to many relationship.
// We will then need a join table for the id's so the publisher id can have indivisdual rows for each author id and the author id 
// can have individual rows for each publisher id in our join table.

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// a publisher has one genre and a genre can have many publishers so we find that we have a one to many relation ship
// in which case we will want to keep track of the genre id as a foreign key in our publisher's table so we will always have a reference to which
// genre belongs to each publisher and can see all the publishers for one genre

var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// TODO: Write a comment here explaining your choice
// as with the publisher author schema, an author can write many genres and a genre can have many authors
// so we will need a join table so that the author id is associated with one genre id per row and vice versa.
