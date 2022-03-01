// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import about from "./about";
import contact from "./contact";
import experience from "./experience";
import skills from "./skills";
import works from "./works";
import workExperience from "./workExperience";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // to the ones provided by any plugins that are intalled
  types: schemaTypes.concat([
    about,
    contact,
    experience,
    skills,
    workExperience,
    works,
  ]),
});
