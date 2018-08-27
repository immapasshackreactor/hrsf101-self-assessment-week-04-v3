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
// Because it has a many to many relationship, associative arrays are optimal in storing data that since
// each table have a PK and would have a FK. If we had stored in each table their respective Publisher/Genre relationship
// it would not be time efficient to look up a particular genre in the publishers table, vice versa since 
// each publisher could potentitally have hundreds of authors. 

var sqlPublisherGenreSchema =  Schemas.OPTION_4; // TODO: Update this constant
// Because Genre to Publisher has a one to many relationship respectively, there's no need to make an associative array or
// have both tables point to the others ID. The publisher table can store a genre id by assigning that column to a FK
// and have Genre's ID has a PK 
var sqlAuthorGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
//Many to many relationship. associative arrays will help sort the relationships between two tables 
// faster lookup time because we can just specific a certain publisher and check if it has author #3, etc. 

