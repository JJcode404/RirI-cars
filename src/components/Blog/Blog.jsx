import { MdArrowForward, MdAccessTime, MdLabel } from 'react-icons/md'
import { blogPosts } from '../../data/blog'

export default function Blog() {
  return (
    <section id="blog" className="section-gap bg-white">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-widest">
              News & Tips
            </span>
            <h2 className="section-title mt-1">Latest from the Blog</h2>
            <div className="divider-red" />
            <p className="section-subtitle mt-3">
              Stay informed with automotive news, buying guides, and expert tips
              from the RIRI CARS team.
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-sm transition-colors flex-shrink-0"
          >
            All Articles <MdArrowForward />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="card-base group rounded overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/9] bg-brand-low flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1">
                    <MdLabel size={10} />
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-muted mb-3">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <MdAccessTime size={12} />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-dark text-sm leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted text-xs leading-relaxed line-clamp-3 mb-4 flex-1">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <a
                  href="#"
                  className="flex items-center gap-1 text-primary hover:text-primary-dark font-semibold text-xs transition-colors mt-auto"
                >
                  Read More <MdArrowForward />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden flex justify-center mt-8">
          <a href="#" className="btn-outline-primary">
            All Articles <MdArrowForward />
          </a>
        </div>
      </div>
    </section>
  )
}
