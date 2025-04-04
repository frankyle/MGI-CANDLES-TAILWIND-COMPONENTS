const posts = [
  {
    id: 1,
    title: 'GBP/JPY: Short Trade Analysis',
    excerpt: 'Why I took a short position on GBP/JPY and the reasoning behind it...',
    slug: 'gbp-jpy-short-trade',
  },
  {
    id: 2,
    title: 'EUR/USD: Long Trade Opportunity',
    excerpt: 'Explaining the rationale behind the long position on EUR/USD...',
    slug: 'eur-usd-bullish-flag',
  },
  {
    id: 3,
    title: 'USD/JPY: Trading the Pullback',
    excerpt: 'A deep dive into why the pullback on USD/JPY presented a solid trading opportunity...',
    slug: 'usd-jpy-trading-pullback',
  },
]

export default function RecentAnalysis() {
  return (
    <div className="bg-white py-12 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Recent Analysis</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Learn how I analyze the forex market and take trading decisions.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={`/analysis/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.excerpt}</p>
              </div>
              <div className="relative mt-8">
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-block mt-3 text-sm font-semibold text-blue-600 hover:text-blue-800"
                >
                  Read more <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
