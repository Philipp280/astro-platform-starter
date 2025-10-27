import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "ce719b37-c77c-4c2d-8125-510392897570",
  token: "",
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "pages",
        label: "Seiten",
        path: "content",
        format: "md",
        fields: [
          { name: "title", label: "Titel", type: "string" },
          { name: "body", label: "Inhalt", type: "rich-text" },
        ],
      },
    ],
  },
});
