import { CASE_STUDY_BASE_QUERY, CASE_STUDY_FIELDS } from "@/constants";
import { client } from "@/sanity/lib/client";
import { Projects } from "@/types";


const buildCaseStudyQuery = (
  type: "all" | "featured" | "single" | "similar",
  id?: string,
) => {
  switch (type) {
    case "featured":
      return `${CASE_STUDY_BASE_QUERY}[difficulty > 8][0..3]{${CASE_STUDY_FIELDS}}`;

    case "single":
      return `${CASE_STUDY_BASE_QUERY}[_id == $id]{${CASE_STUDY_FIELDS}}`;

    case "similar":
      return `${CASE_STUDY_BASE_QUERY}[_id != $id]{${CASE_STUDY_FIELDS}}`;

    default:
      return `${CASE_STUDY_BASE_QUERY}{${CASE_STUDY_FIELDS}}`;
  }
};

export const getCaseStudies = async (type: "all" | "featured") => {
  try {
    const query = buildCaseStudyQuery(type);
    return (await client.fetch(query, undefined, {cache:"force-cache"})) as Projects[];
  } catch (error) {
    console.error("Error fetching case studies:", error);
    throw error;
  }
};

export const getSingleCaseStudy = async (id: string) => {
  try {
    const query = buildCaseStudyQuery("single");
    const params = { id };
    const res = await client.fetch(query, params, {
      cache:"force-cache"
    });
    return res.length > 0 ? (res[0] as Projects) : null;
  } catch (error) {
    console.error(`Error fetching single case study (ID: ${id}):`, error);
    throw error;
  }
};

export const getSimilarCaseStudies = async (id: string) => {
  try {
    const query = buildCaseStudyQuery("similar");
    const params = { id };
    return (await client.fetch(query, params, {cache:"force-cache"})) as Projects[];
  } catch (error) {
    console.error(`Error fetching similar case studies (ID: ${id}):`, error);
    throw error;
  }
};
