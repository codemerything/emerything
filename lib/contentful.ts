import { createClient } from "contentful";
import { cache } from "react";

if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error("CONTENTFUL_SPACE_ID environment variable is not defined");
}

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    "CONTENTFUL_ACCESS_TOKEN environment variable is not defined"
  );
}

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

interface Technology {
  name: string;
  category?: string;
}

interface ReviewMessage {
  text: string;
  timestamp: string;
  isClient: boolean;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: Technology[];
  images: string[];
  reviewAuthor?: string;
  reviewRole?: string;
  reviewCompany?: string;
  reviewMessages?: ReviewMessage[];
  liveUrl?: string;
  slug?: string;
  stats?: {
    duration?: string;
    team?: string;
    launched?: string;
  };
  links?: {
    github?: string;
    live?: string;
  };
}

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await client.getEntries({
      content_type: "projects",
    });

    if (!response || !response.items) {
      console.error("Invalid response from Contentful:", response);
      return [];
    }

    return response.items.map((item: any) => ({
      title: item.fields.title || "",
      subtitle: item.fields.subtitle || "",
      description: item.fields.description || "",
      technologies: item.fields.technologies || [],
      images:
        item.fields.images?.map((image: any) => image?.fields?.file?.url) || [],
      reviewAuthor: item.fields.reviewAuthor,
      reviewRole: item.fields.reviewRole,
      reviewCompany: item.fields.reviewCompany,
      reviewMessage: item.fields.reviewMessage,
      liveUrl: item.fields.liveUrl,
      slug: item.fields.slug || item.sys.id,
      stats: {
        duration: item.fields.duration,
        team: item.fields.team,
        launched: item.fields.launched,
      },
      links: {
        github: item.fields.githubUrl,
        live: item.fields.liveUrl,
      },
    }));
  } catch (error) {
    console.error("Error fetching projects from Contentful:", error);
    return [];
  }
}

export async function getRecentProjects(): Promise<Project[]> {
  try {
    const response = await client.getEntries({
      content_type: "projects",
      limit: 3,
      order: "-sys.createdAt", // Order by creation date, newest first
    });

    if (!response || !response.items) {
      console.error("Invalid response from Contentful:", response);
      return [];
    }

    return response.items.map((item: any) => ({
      title: item.fields.title || "",
      subtitle: item.fields.subtitle || "",
      description: item.fields.description || "",
      technologies: item.fields.technologies || [],
      images:
        item.fields.images?.map((image: any) => image?.fields?.file?.url) || [],
      slug: item.fields.slug || item.sys.id,
    }));
  } catch (error) {
    console.error("Error fetching recent projects from Contentful:", error);
    return [];
  }
}

// Cache the getProjectBySlug function
export const getProjectBySlug = cache(
  async (slug: string): Promise<Project | null> => {
    try {
      const response = await client.getEntries({
        content_type: "projects",
        "fields.slug": slug,
        limit: 1,
        include: 2,
      });

      if (!response.items || response.items.length === 0) {
        return null;
      }

      const item = response.items[0];

      // Parse review messages
      let reviewMessages: ReviewMessage[] | undefined;
      if (Array.isArray(item.fields.reviewMessages)) {
        reviewMessages = item.fields.reviewMessages.map((msg: any) => ({
          text: String(msg.text || ""),
          timestamp: String(msg.timestamp || ""),
          isClient: Boolean(msg.isClient),
        }));
      }

      const project: Project = {
        title: String(item.fields.title || ""),
        subtitle: String(item.fields.subtitle || ""),
        description: String(item.fields.description || ""),
        technologies: Array.isArray(item.fields.technologies)
          ? item.fields.technologies.map((tech: any) => ({
              name: String(tech?.name || ""),
              category: tech?.category ? String(tech.category) : undefined,
            }))
          : [],
        images: Array.isArray(item.fields.images)
          ? item.fields.images
              .filter((image: any) => image?.fields?.file?.url)
              .map((image: any) => image.fields.file.url)
          : [],
        reviewAuthor: item.fields.reviewAuthor
          ? String(item.fields.reviewAuthor)
          : undefined,
        reviewRole: item.fields.reviewRole
          ? String(item.fields.reviewRole)
          : undefined,
        reviewCompany: item.fields.reviewCompany
          ? String(item.fields.reviewCompany)
          : undefined,
        reviewMessages,
        liveUrl: item.fields.liveUrl ? String(item.fields.liveUrl) : undefined,
        slug: String(item.fields.slug || item.sys.id),
        stats: {
          duration: item.fields.duration
            ? String(item.fields.duration)
            : undefined,
          team: item.fields.team ? String(item.fields.team) : undefined,
          launched: item.fields.launched
            ? String(item.fields.launched)
            : undefined,
        },
        links: {
          github: item.fields.githubUrl
            ? String(item.fields.githubUrl)
            : undefined,
          live: item.fields.liveUrl ? String(item.fields.liveUrl) : undefined,
        },
      };

      return project;
    } catch (error) {
      console.error("Error fetching project by slug:", error);
      return null;
    }
  }
);
