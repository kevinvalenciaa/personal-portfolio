export interface BlogPostMeta {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  slug: string;
  readingTime?: number;
  featured?: boolean;
}

export function generateBlogMetadata(meta: BlogPostMeta) {
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.tags,
    authors: [{ name: "Kevin Valencia" }],
    openGraph: {
      type: "article",
      publishedTime: meta.publishedAt,
      modifiedTime: meta.updatedAt,
      tags: meta.tags,
      title: meta.title,
      description: meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
