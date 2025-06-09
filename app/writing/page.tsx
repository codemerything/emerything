import Link from "next/link"

const featuredPost = {
  title: "The Art of Minimal Design",
  date: "December 3, 2024",
  readTime: "5 minute read",
  excerpt: "A self-guaranteeing promise does not require you to trust anyone. You can verify it yourself.",
  slug: "art-of-minimal-design",
}

const topics = [
  "advice",
  "ai",
  "competition",
  "defaults",
  "design",
  "empathy",
  "evergreen",
  "friendship",
  "habits",
  "hardware",
  "humanism",
  "ideas",
  "learning",
  "leverage",
  "love",
  "manufacturing",
  "media",
  "minimalism",
  "money",
  "obsidian",
  "open-source",
  "packaging",
  "perfectionism",
  "popular",
  "projects",
  "rituals",
  "startups",
  "synthography",
  "teaching",
  "tools",
  "writing",
]

const writings = [
  {
    date: "2024-12-03",
    title: "The Art of Minimal Design",
    slug: "art-of-minimal-design",
  },
  {
    date: "2024-11-28",
    title: "Building Scalable React Applications",
    slug: "building-scalable-react-applications",
  },
  {
    date: "2024-11-15",
    title: "The Future of Web Development",
    slug: "future-of-web-development",
  },
  {
    date: "2024-10-22",
    title: "Understanding Modern CSS",
    slug: "understanding-modern-css",
  },
  {
    date: "2024-10-08",
    title: "JavaScript Best Practices",
    slug: "javascript-best-practices",
  },
  {
    date: "2024-09-30",
    title: "Design Systems That Scale",
    slug: "design-systems-that-scale",
  },
  {
    date: "2024-09-15",
    title: "The Philosophy of Code",
    slug: "philosophy-of-code",
  },
  {
    date: "2024-08-28",
    title: "Minimalism in Digital Products",
    slug: "minimalism-in-digital-products",
  },
  {
    date: "2024-08-10",
    title: "Creative Problem Solving",
    slug: "creative-problem-solving",
  },
  {
    date: "2024-07-25",
    title: "The Art of Saying No",
    slug: "art-of-saying-no",
  },
]

export default function Writing() {
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

          {/* Topics Section */}
          <section className="space-y-6">
            <h2 className="text-xl text-gray-500 dark:text-gray-400">Topics</h2>
            <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {topics.map((topic, index) => (
                <span key={topic}>
                  <Link
                    href={`/writing/topics/${topic}`}
                    className="underline hover:text-red-500 dark:hover:text-red-400 transition-colors"
                  >
                    {topic}
                  </Link>
                  {index < topics.length - 1 && ", "}
                </span>
              ))}
            </div>
          </section>

          {/* Writing Archive Section */}
          <section className="space-y-6">
            <h2 className="text-xl text-gray-500 dark:text-gray-400">Writing</h2>
            <div className="space-y-3">
              {writings.map((post, index) => (
                <div key={index} className="flex items-start gap-6">
                  <time className="text-gray-500 dark:text-gray-400 text-sm font-mono min-w-[80px]">{post.date}</time>
                  <Link
                    href={`/writing/${post.slug}`}
                    className="text-red-500 dark:text-red-400 underline hover:no-underline transition-colors"
                  >
                    {post.title}
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
