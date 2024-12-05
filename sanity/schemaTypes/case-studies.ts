export default {
  name: "caseStudies",
  title: "Case Studies",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "difficulty",
      title: "Difficulty",
      type: "number",
    },
    {
      name: "subTitle",
      title: "Sub-title",
      type: "string",
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      option: { hotspot: true },
    },
    {
      name: "mockup",
      title: "Mockup",
      type: "image",
    },
    {
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
    },
    {
      name: "demoSite",
      title: "Demo site",
      type: "string",
    },
    {
      name: "sourceCode",
      title: "Source Code",
      type: "string",
    },

    {
      name: "techStacks",
      title: "Tech Stack",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "icon",
              title: "Icon",
              type: "image",
            },
          ],
        },
      ],
    },

    {
      name: "descriptions",
      title: "Descriptions",
      type: "string",
    },
    {
      name: "challenges",
      title: "Challenges",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "learnings",
      title: "Learnings",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
