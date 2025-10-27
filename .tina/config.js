import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "ce719b37-c77c-4c2d-8125-510392897570",
  token: "",
  build: { outputFolder: "admin", publicFolder: "static" },
  media: { tina: { mediaRoot: "images", publicFolder: "static" } },
  schema: {
    collections: [
      { name: "home", label: "Startseite", path: "content", match: { include: ["_index.md"] }, format: "md", fields: [{ name: "title", label: "Titel", type: "string" }, { name: "body", label: "Inhalt", type: "rich-text" }] },
      { name: "mixes", label: "Mixes", path: "content/mixes", format: "md", fields: [{ name: "title", label: "Titel", type: "string" }, { name: "body", label: "Inhalt", type: "rich-text" }] },
      { name: "book", label: "Buchen", path: "content/book", format: "md", fields: [{ name: "title", label: "Titel", type: "string" }, { name: "body", label: "Inhalt", type: "rich-text" }] }
    ],
  },
});
