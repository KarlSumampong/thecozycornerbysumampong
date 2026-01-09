import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Cozy Corner - Free Books Online | Your Digital Reading Sanctuary",
  description: "Welcome to The Cozy Corner, your cozy digital sanctuary for free books online. Discover hand-picked book recommendations, meaningful stories, and inspiration for every reader.",
  openGraph: {
    title: "The Cozy Corner - Free Books Online",
    description: "Your cozy digital sanctuary for free books and meaningful stories",
  },
};

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center py-12">
      <main className="flex w-full max-w-4xl flex-col items-center gap-10 px-6 md:px-10 py-16 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-amber-200 relative overflow-hidden fade-in">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-rose-200/30 to-amber-200/30 rounded-full blur-3xl -z-10"></div>
        
        {/* Book icon with floating animation */}
        <div className="float-animation">
          <div className="relative">
            <Image
              src="/images/book1.png"
              alt="The Cozy Corner - Free Books Online"
              width={140}
              height={200}
              priority
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">📖</span>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6 max-w-2xl">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-800 text-sm font-semibold mb-2">
            ✨ Your Digital Reading Sanctuary
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-700 via-orange-600 to-rose-600 bg-clip-text text-transparent leading-tight">
            Welcome to The Cozy Corner
          </h1>
          
          <p className="text-lg md:text-xl text-amber-900/80 leading-relaxed">
            Discover free books online in your personal reading sanctuary. We curate meaningful stories that inspire, relax, and transport you to new worlds—all from the comfort of your cozy corner.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 justify-center items-center">
            <div className="flex items-center gap-2 text-amber-700">
              <span className="text-2xl">📚</span>
              <span className="font-medium">Curated Collection</span>
            </div>
            <div className="flex items-center gap-2 text-amber-700">
              <span className="text-2xl">🎁</span>
              <span className="font-medium">100% Free</span>
            </div>
            <div className="flex items-center gap-2 text-amber-700">
              <span className="text-2xl">☕</span>
              <span className="font-medium">Cozy Experience</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/books"
            className="btn-primary flex h-14 items-center justify-center rounded-full px-8 text-amber font-semibold shadow-lg text-lg group"
          >
            <span>Browse Free Books</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/about"
            className="flex h-14 items-center justify-center rounded-full border-2 border-amber-600 px-8 hover:bg-amber-50 font-semibold text-amber-900 shadow-md text-lg transition-all hover:shadow-lg"
          >
            Learn More About Us
          </Link>
        </div>

        {/* Featured stats */}
        <div className="grid grid-cols-3 gap-6 w-full max-w-2xl pt-8 border-t border-amber-200">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              100+
            </div>
            <div className="text-sm md:text-base text-amber-700 mt-1">Free Books</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              5K+
            </div>
            <div className="text-sm md:text-base text-amber-700 mt-1">Happy Readers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Daily
            </div>
            <div className="text-sm md:text-base text-amber-700 mt-1">Updates</div>
          </div>
        </div>
      </main>
    </div>
  );
}