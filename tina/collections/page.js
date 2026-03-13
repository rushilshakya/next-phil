/**
 * @type {import('tinacms').Collection}
 */
import globalValues from "../../content/globals/global-values.json";

export default {
  label: "Pages",
  name: "page",
  path: "content/page",
  fields: [
    { type: "string", label: "Title", name: "title", required: true },
    { type: "string", label: "Heading", name: "heading", required: true },
    {
      type: "string",
      label: "Sub heading",
      name: "subHeading",
      required: true,
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      name: "resources",
      label: "Resources",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.category
              ? globalValues.categories.find(
                  (cat) => cat.value === item.category
                ).label
              : "Pick a resource",
          };
        },
      },
      fields: [
        {
          type: "image",
          name: "icon",
          label: "Icon",
        },
        {
          type: "string",
          label: "Category",
          name: "category",
          options: globalValues.categories,
          required: true,
        },
        { type: "string", label: "Description", name: "description" },
        { type: "string", label: "Button label", name: "buttonLabel" },
      ],
    },
  ],
  ui: {
    filename: {
      readonly: true,
      slugify: (values) => {
        return `${values?.title?.toLowerCase().replace(/ /g, "-")}`;
      },
    },
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      return undefined;
    },
  },
};
