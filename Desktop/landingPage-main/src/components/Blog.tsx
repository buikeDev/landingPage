import React from "react";

const blogPosts = [
  {
    id: 1,
    category: "MEDIA SEO",
    title: "Fresh startup ideas for your digital business",
    date: "Apr 21, 2020",
    commentsCount: 0,
    image: "/blog/startup-desk.jpg",
  },
  {
    id: 2,
    category: "MEDIA SEO",
    title: "Top 5 targeting techniques to attract customers",
    date: "Apr 21, 2020",
    commentsCount: 0,
    image: "/blog/targeting-techniques.jpg",
  },
  {
    id: 3,
    category: "MEDIA SEO",
    title: "Why do project managers need to focus on strategy?",
    date: "Apr 21, 2020",
    commentsCount: 0,
    image: "/blog/project-management.jpg",
  },
];

const BlogCard = ({ post }: { post: (typeof blogPosts)[0] }) => {
  return (
    <article className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="mb-4">
          <span className="text-sm font-semibold text-violet-600">
            {post.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-navy-900 mb-4 hover:text-violet-600 transition-colors">
          <a href="#">{post.title}</a>
        </h3>
        <div className="flex items-center text-gray-500 text-sm">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.commentsCount} Comments</span>
        </div>
      </div>
    </article>
  );
};

const Blog = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-violet-600 mb-2">
            OUR BLOG
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-navy-900">
            Latest articles
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-violet-600"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
