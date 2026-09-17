import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "../site.config";
import { getPostSlug } from "../utils/postSlug";

export async function GET(context: { site: URL }) {
  const posts = (await getCollection("posts", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");
  const site = new URL(base, context.site);

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `${base}posts/${getPostSlug(post.id)}/`,
    })),
  });
}
