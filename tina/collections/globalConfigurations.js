/**
 * @type {import('tinacms').Collection}
 */

export default {
  label: "Global configurations",
  name: "globalConfigurations",
  path: "content/globals",
  format: "json",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
    global: true,
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      isTitle: true,
      required: true,
    },
    {
      type: "object",
      label: "Languages",
      name: "languages",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.label };
        },
      },
      fields: [
        { type: "string", label: "Code", name: "value", required: true },
        { type: "string", label: "Display", name: "label", required: true },
      ],
    },
    {
      type: "object",
      label: "Categories",
      name: "categories",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.label };
        },
      },
      fields: [
        { type: "string", label: "Code", name: "value", required: true },
        { type: "string", label: "Label", name: "label", required: true },
        { type: "number", label: "Order", name: "order", required: true },
        { type: "string", label: "Display", name: "display", required: true },
      ],
    },
    {
      type: "object",
      label: "Tags",
      name: "tags",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.label };
        },
      },
      fields: [
        { type: "string", label: "Code", name: "value", required: true },
        { type: "string", label: "Label", name: "label", required: true },
      ],
    },
    {
      type: "object",
      label: "Resource types",
      name: "resourceTypes",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.label };
        },
      },
      fields: [
        { type: "string", label: "Code", name: "value", required: true },
        { type: "string", label: "Label", name: "label", required: true },
      ],
    },
    {
      type: "object",
      label: "Types of post",
      name: "postTypes",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.label };
        },
      },
      fields: [
        { type: "string", label: "Code", name: "value", required: true },
        { type: "string", label: "Label", name: "label", required: true },
      ],
    },
  ],
};
