export const metadata = {
  title: "About Us - The Cozy Corner | Our Story & Mission",
  description: "Learn about The Cozy Corner's mission to provide free books online. Discover how we curate meaningful stories for readers seeking calm, comfort, and inspiration.",
  openGraph: {
    title: "About The Cozy Corner - Our Story",
    description: "Discover our mission to create a cozy sanctuary for book lovers",
  },
};

export default function AboutPage() {
  return (
    <section className="fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Hero section */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-800 text-sm font-semibold mb-4">
            📖 Our Story
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent mb-6">
            About The Cozy Corner
          </h1>
          <p className="text-xl text-amber-900/70 max-w-2xl mx-auto">
            Where every book lover finds their perfect reading sanctuary
          </p>
        </div>

        {/* Main content */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-amber-200 p-8 md:p-12 space-y-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl -z-10"></div>
          
          <div className="space-y-6 text-amber-900/80 leading-relaxed text-lg">
            <div className="flex items-start gap-4">
              <span className="text-4xl mt-1">🏡</span>
              <div>
                <h2 className="text-2xl font-bold text-amber-800 mb-3">Our Mission</h2>
                <p>
                  The Cozy Corner is more than just an online bookstore — it is a digital sanctuary built for readers who cherish calm, comfort, and meaningful stories. We believe that reading should be a peaceful escape, a moment of tranquility in our busy lives.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-4xl mt-1">💝</span>
              <div>
                <h2 className="text-2xl font-bold text-amber-800 mb-3">What We Do</h2>
                <p>
                  We carefully curate a collection of free books that inspire, relax, and transport you to new worlds. Every recommendation is selected with love and intention, ensuring that each book on our shelves offers something special—whether it is wisdom, adventure, comfort, or joy.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-4xl mt-1">✨</span>
              <div>
                <h2 className="text-2xl font-bold text-amber-800 mb-3">Our Values</h2>
                <p>
                  We are committed to making quality literature accessible to everyone. Reading should not be a luxury—it should be a right. That is why all our books are completely free, and our platform is designed to be simple, welcoming, and distraction-free.
                </p>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 gap-6 pt-8 border-t border-amber-200">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-bold text-amber-900 text-lg mb-2">Curated Selection</h3>
              <p className="text-amber-800/70">
                Every book is hand-picked by our team of passionate readers who understand what makes a story truly special.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200">
              <div className="text-3xl mb-3">🌙</div>
              <h3 className="font-bold text-amber-900 text-lg mb-2">Cozy Experience</h3>
              <p className="text-amber-800/70">
                Our platform is designed to feel like curling up in your favorite reading nook—warm, inviting, and peaceful.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200">
              <div className="text-3xl mb-3">🎁</div>
              <h3 className="font-bold text-amber-900 text-lg mb-2">Always Free</h3>
              <p className="text-amber-800/70">
                Quality literature for everyone, everywhere. No subscriptions, no hidden costs—just great books.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200">
              <div className="text-3xl mb-3">❤️</div>
              <h3 className="font-bold text-amber-900 text-lg mb-2">Reader-Focused</h3>
              <p className="text-amber-800/70">
                Your reading experience is our priority. Simple navigation, beautiful design, and no distractions.
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center pt-8 border-t border-amber-200">
            <p className="text-xl text-amber-900 mb-6">
              Join our community of book lovers and discover your next favorite story.
            </p>
            <a
              href="/books"
              className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-8 text-white font-semibold shadow-lg"
            >
              Start Reading Free Books →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}