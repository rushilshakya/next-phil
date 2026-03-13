/**
 * @type {import('tinacms').Collection}
 */
import globalValues from "../../content/globals/global-values.json";

export default {
  label: "Posts",
  name: "post",
  path: "content/post",
  // Setting a default will auto-populate new items with the given values
  defaultItem: {
    draft: true,
  },
  fields: [
    { type: "boolean", label: "Draft", name: "draft" },
    {
      type: "string",
      label: "Title",
      name: "title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      label: "Summary",
      name: "summary",
    },
    { type: "datetime", label: "Date", name: "date", required: true },
    {
      type: "string",
      label: "Category",
      name: "category",
      options: globalValues.categories,
      required: true,
    },
    {
      type: "string",
      label: "Type of resource",
      name: "typeOfResource",
      options: globalValues.resourceTypes,
      required: true,
    },
    {
      type: "string",
      label: "Post type",
      name: "type",
      options: globalValues.postTypes,
      required: true,
    },
    {
      type: "string",
      label: "Link url (for Post type: Link)",
      name: "linkUrl",
      ui: {
        parse(value) {
          return value.trim();
        },
      },
    },
    { type: "number", label: "Priority", name: "priority" },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      label: "Tags",
      name: "tags",
      list: true,
      options: globalValues.tags,
    },
    {
      type: "object",
      label: "Downloadable resources",
      name: "downloads",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item.language }),
      },
      fields: [
        {
          type: "string",
          label: "Language",
          name: "language",
          options: globalValues.languages,
        },
        {
          type: "image",
          label: "PDF file",
          name: "pdf",
        },
      ],
    },
    {
      type: "object",
      name: "relatedResources",
      label: "Related resources",
      list: true,
      ui: {
        itemProps: (item) => ({ label: item.post }),
      },
      fields: [
        {
          type: "reference",
          label: "Post",
          name: "post",
          collections: ["post"],
        },
      ],
    },
    {
      type: "rich-text",
      label: "Blog Post Body",
      name: "body",
      isBody: true,
    },
  ],
  ui: {
    filename: {
      readonly: true,
      slugify: (values) => {
        return `${values.type === "link" ? "link-" : ""}${values?.title
          ?.toLowerCase()
          .replace(/ /g, "-")}`;
      },
    },
    router: ({ document }) => {
      if (document._sys.filename.split("-")[0] !== "link") {
        return `/post/${document._sys.filename}`;
      }
      return undefined;
    },
  },
};
