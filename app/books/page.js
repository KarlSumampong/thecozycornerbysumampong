import Image from "next/image";

export const metadata = {
  title: "Free Books Online - Browse Our Collection | The Cozy Corner",
  description: "Browse our curated collection of free books online. From modern CSS guides to personal development classics, find your next favorite read at The Cozy Corner.",
  openGraph: {
    title: "Free Books - The Cozy Corner",
    description: "Discover our hand-picked collection of free books for every reader",
  },
};

export default function BooksPage() {
  const books = [
    {
      image: "/images/book1.png",
      title: "Modern CSS with Tailwind",
      author: "Sarah Johnson",
      description: "Master modern web design with this comprehensive guide to Tailwind CSS and responsive design principles.",
      genre: "Web Development",
      rating: "4.8",
    },
    {
      image: "/images/book2.png",
      title: "The Next.js Handbook",
      author: "Michael Chen",
      description: "Everything you need to know about building lightning-fast web applications with Next.js and React.",
      genre: "Programming",
      rating: "4.9",
    },
    {
      image: "/images/book3.jpg",
      title: "Mindset: The New Psychology",
      author: "Carol S. Dweck",
      description: "Discover the power of growth mindset and unlock your potential for success and fulfillment.",
      genre: "Self-Development",
      rating: "4.7",
    },
  ];

  return (
    <section className="fade-in">
      <div className="max-w-6xl mx-auto">
        {/* Page header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-800 text-sm font-semibold mb-4">
            📚 Our Collection
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent mb-6">
            Free Books Online
          </h1>
          <p className="text-xl text-amber-900/70 max-w-2xl mx-auto">
            Dive into our carefully curated collection of free books, selected with love for readers like you
          </p>
        </div>

        {/* Books grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className="book-card bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-200 overflow-hidden group cursor-pointer"
            >
              {/* Book image */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100">
                <Image
                  src={book.image}
                  alt={`${book.title} - Free book available at The Cozy Corner`}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-amber-800 flex items-center gap-1">
                  <span>⭐</span>
                  <span>{book.rating}</span>
                </div>
                <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Free
                </div>
              </div>

              {/* Book details */}
              <div className="p-6 space-y-3">
                <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold">
                  {book.genre}
                </div>
                
                <h2 className="text-xl font-bold text-amber-900 group-hover:text-amber-700 transition-colors">
                  {book.title}
                </h2>
                
                <p className="text-sm text-amber-600 font-medium">
                  by {book.author}
                </p>
                
                <p className="text-amber-900/70 text-sm leading-relaxed line-clamp-3">
                  {book.description}
                </p>

                {/* Action buttons */}
                <div className="flex gap-3 pt-4">
                  <button className="btn-primary flex-1 h-11 flex items-center justify-center rounded-full text-white font-semibold text-sm shadow-md">
                    <span>Read Now</span>
                    <span className="ml-2">📖</span>
                  </button>
                  <button className="h-11 w-11 flex items-center justify-center rounded-full border-2 border-amber-600 text-amber-700 hover:bg-amber-50 transition-all">
                    <span className="text-xl">💾</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more section */}
        <div className="text-center mt-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-200 p-8">
          <h3 className="text-2xl font-bold text-amber-900 mb-3">
            Want More Free Books?
          </h3>
          <p className="text-amber-900/70 mb-6 max-w-xl mx-auto">
            We are constantly adding new titles to our collection. Check back regularly or subscribe to get notified about new releases.
          </p>
          <button className="btn-primary h-12 px-8 rounded-full text-white font-semibold shadow-lg inline-flex items-center gap-2">
            <span>Load More Books</span>
            <span>↓</span>
          </button>
        </div>

        {/* Categories section */}
        <div className="mt-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-8">
          <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">
            Browse by Category
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Fiction', 'Non-Fiction', 'Self-Help', 'Technology', 'Business', 'Romance', 'Mystery', 'Science'].map((category) => (
              <button
                key={category}
                className="px-5 py-2 bg-white border-2 border-amber-300 rounded-full text-amber-800 font-semibold hover:bg-amber-100 hover:border-amber-500 transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}