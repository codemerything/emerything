import { XMLParser } from "fast-xml-parser";

export type SubstackArticle = {
  title: string;
  date: string;
  link: string;
  guid: string;
};

export async function fetchSubstackArticles(): Promise<SubstackArticle[]> {
  const res = await fetch("https://zimah.substack.com/feed", {
    cache: "no-store",
  });
  const xml = await res.text();
  const parser = new XMLParser();
  const json = parser.parse(xml);
  const items = json?.rss?.channel?.item || [];
  return Array.isArray(items)
    ? items.map((item: any) => ({
        title: item.title,
        date: item.pubDate,
        link: item.link,
        guid: item.guid,
      }))
    : [];
}
