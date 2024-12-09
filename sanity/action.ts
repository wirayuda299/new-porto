import { Projects } from "@/types";
import { client } from "./lib/client";

type Sort = "all" | "featured";

export async function getCaseStudies(sort: Sort = "all"): Promise<Projects[]> {
  try {
    let query: string;

    if (sort === "featured") {
      query = `*[_type == "caseStudies" && difficulty > 8.5][0..2]{
				 _id,
    title,
    subTitle,
    "mockup":mockup.asset->url,
    demoSite,
backgroundColor,
    sourceCode,
   "techStacks":techStacks[]{
        "icon": icon.asset->url, 
         name 
      }
}
`;
    } else {
      query = `*[_type == "caseStudies"]{
 _id,
        title,
        subTitle,
        "mockup":mockup.asset->url,
				backgroundColor
	
}`;
    }
    return await client.fetch(query, { next: { revalidate: 10 } });
  } catch (error) {
    throw error;
  }
}
