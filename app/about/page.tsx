import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <div className="">
      {/* About Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* About Me Section */}
          <section className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">About me</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm [Your Name]. You may also know me as <span className="italic">username</span>, currently a Software
                Developer at{" "}
                <Link href="#" className="text-red-500 dark:text-red-400 underline hover:no-underline">
                  Company Name
                </Link>
                . Previously I worked at{" "}
                <Link href="#" className="text-red-500 dark:text-red-400 underline hover:no-underline">
                  Previous Company
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-red-500 dark:text-red-400 underline hover:no-underline">
                  Another Company
                </Link>
                . A few links to explore:
              </p>
              <ul className="space-y-2 mt-6">
                <li>
                  <Link href="/writing" className="text-red-500 dark:text-red-400 underline hover:no-underline">
                    Writing
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-red-500 dark:text-red-400 underline hover:no-underline">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-red-500 dark:text-red-400 underline hover:no-underline">
                    Photography
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-red-500 dark:text-red-400 underline hover:no-underline">
                    What I'm doing now
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* Elsewhere Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Elsewhere</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                You can{" "}
                <Link
                  href="mailto:your@email.com"
                  className="text-red-500 dark:text-red-400 underline hover:no-underline"
                >
                  receive updates from me via email
                </Link>{" "}
                or follow me:
              </p>
              <ul className="space-y-2 mt-6">
                <li>
                  RSS feed:{" "}
                  <Link href="/feed.xml" className="text-red-500 dark:text-red-400 underline hover:no-underline">
                    yourname.com/feed
                  </Link>
                </li>
                <li>
                  Twitter:{" "}
                  <Link
                    href="https://twitter.com/yourusername"
                    className="text-red-500 dark:text-red-400 underline hover:no-underline"
                  >
                    @yourusername
                    <ExternalLink className="inline w-3 h-3 ml-1" />
                  </Link>
                </li>
                <li>
                  GitHub:{" "}
                  <Link
                    href="https://github.com/yourusername"
                    className="text-red-500 dark:text-red-400 underline hover:no-underline"
                  >
                    @yourusername
                    <ExternalLink className="inline w-3 h-3 ml-1" />
                  </Link>
                </li>
                <li>
                  LinkedIn:{" "}
                  <Link
                    href="https://linkedin.com/in/yourusername"
                    className="text-red-500 dark:text-red-400 underline hover:no-underline"
                  >
                    @yourusername
                    <ExternalLink className="inline w-3 h-3 ml-1" />
                  </Link>
                </li>
                <li>
                  Mastodon:{" "}
                  <Link
                    href="https://mastodon.social/@yourusername"
                    className="text-red-500 dark:text-red-400 underline hover:no-underline"
                  >
                    @yourusername@mastodon.social
                    <ExternalLink className="inline w-3 h-3 ml-1" />
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* Speaking Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Speaking</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                If you would like me to appear on your publication or event,{" "}
                <Link
                  href="mailto:your@email.com"
                  className="text-red-500 dark:text-red-400 underline hover:no-underline"
                >
                  reach out to me
                </Link>
                .
              </p>
              <ul className="space-y-2 mt-6">
                <li>
                  <Link href="#" className="text-red-500 dark:text-red-400 underline hover:no-underline">
                    Tech Conference
                    <ExternalLink className="inline w-3 h-3 ml-1" />
                  </Link>{" "}
                  (2024)
                </li>
                <li>
                  <Link href="#" className="text-red-500 dark:text-red-400 underline hover:no-underline">
                    Design Podcast
                    <ExternalLink className="inline w-3 h-3 ml-1" />
                  </Link>{" "}
                  (2023)
                </li>
                <li>
                  <Link href="#" className="text-red-500 dark:text-red-400 underline hover:no-underline">
                    Developer Meetup
                    <ExternalLink className="inline w-3 h-3 ml-1" />
                  </Link>{" "}
                  (2023)
                </li>
                <li>
                  <Link href="#" className="text-red-500 dark:text-red-400 underline hover:no-underline">
                    Industry Panel
                    <ExternalLink className="inline w-3 h-3 ml-1" />
                  </Link>{" "}
                  (2022)
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
