import { MetadataRoute } from "next";

// TODO: Get this from env
const baseURL = "http://localhost:3000";

const pages = [
  "creators",
  "faq",
  "media",
  "meetngreet",
  "posts",
  "profile",
  "shop",
  "streams",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseURL}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...pages.map((page) => ({
      url: `${baseURL}/${page}`,
      lastModified: new Date(),
      changeFrequency: "hourly" as any,
      priority: 1,
    })),
  ];
}
