// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import user from './user';
import pin from './pin';
import comment from './comment';
import postedBy from './postedBy';
import save from './save';
//just wanted to take a minute here and say
//how amazing sanity.io is.  In the matter
//of less than a minute or so I have essentially
//created the DB/connection via the backend of my app
//in vanilla MERN this would have taken at least 45:00
//for this complexity level (as in not very HA!) but 
//sanity simplifies it all so well!  

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    user, pin, comment, postedBy, save
  ]),
})
