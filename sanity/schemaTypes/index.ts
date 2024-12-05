import { type SchemaTypeDefinition } from "sanity";
import caseStudies from "./case-studies";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [caseStudies],
};
