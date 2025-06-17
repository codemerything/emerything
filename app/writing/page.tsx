import Link from "next/link"
import { fetchSubstackArticles } from "@/lib/fetchSubstack"
import { fetchHashnodeArticles } from "@/lib/fetchHashnode"

export default async function Writing() {
  // Fetch articles from both sources
  const [substack, hashnode] = await Promise.all([
    fetchSubstackArticles(),
    fetchHashnodeArticles(),
  ])

  // Normalize and merge articles
  const merged = [
    ...substack.map((a) => ({
      title: a.title,
      date: a.date,
      slug: a.guid || a.link,
      source: "substack",
      url: a.link,
    })),
    ...hashnode.map((a) => ({
      title: a.title,
      date: a.date,
      slug: a.slug,
      source: "hashnode",
      url: `https://mmnldm.hashnode.dev/${a.slug}`,
    })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // Featured post (keep as is for now)
  const featuredPost = {
    title: "The Art of Minimal Design",
    date: "December 3, 2024",
    readTime: "5 minute read",
    excerpt: "A self-guaranteeing promise does not require you to trust anyone. You can verify it yourself.",
    slug: "art-of-minimal-design",
  }



  return (
    <div>
      {/* Writing Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {/* Latest Section */}
          <section className="space-y-6">
            <h2 className="text-xl text-gray-500 dark:text-gray-400">Latest</h2>
            <article className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                <Link
                  href={`/writing/${featuredPost.slug}`}
                  className="hover:text-red-500 dark:hover:text-red-400 transition-colors"
                >
                  {featuredPost.title}
                </Link>
              </h1>
              <div className="text-gray-500 dark:text-gray-400 text-sm">
                {featuredPost.date} · {featuredPost.readTime}
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{featuredPost.excerpt}</p>
              <Link
                href={`/writing/${featuredPost.slug}`}
                className="text-red-500 dark:text-red-400 hover:underline text-sm"
              >
                Keep reading →
              </Link>
            </article>
          </section>

          <hr className="border-gray-200 dark:border-gray-800" />


          {/* Writing Archive Section */}
          <section className="space-y-6">
            <h2 className="text-xl text-gray-500 dark:text-gray-400">Writing</h2>
            <div className="space-y-3">
              {merged.map((post, index) => (
                <div key={index} className="flex items-start gap-6">
                  <time className="text-gray-500 dark:text-gray-400 text-sm font-mono min-w-[80px]">{new Date(post.date).toISOString().slice(0, 10)}</time>
                  <a
                    href={post.url}
                    className="text-red-500 dark:text-red-400 underline hover:no-underline transition-colors"
                    target="_blank" rel="noopener noreferrer"
                  >
                    {post.title} <span className="ml-2 text-xs text-gray-400">({post.source})</span>
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
