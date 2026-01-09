import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Cozy Corner - Free Books Online | Your Digital Reading Sanctuary",
  description: "Discover free books online at The Cozy Corner. A carefully curated collection of meaningful stories for readers seeking calm, comfort, and inspiration. Download and read your favorites today.",
  keywords: "free books online, digital library, book recommendations, reading sanctuary, ebooks, online bookstore, cozy reading",
  authors: [{ name: "The Cozy Corner" }],
  openGraph: {
    title: "The Cozy Corner - Free Books Online",
    description: "Your cozy digital sanctuary for free books and meaningful stories",
    type: "website",
    locale: "en_US",
    siteName: "The Cozy Corner",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Cozy Corner - Free Books Online",
    description: "Discover free books in your digital reading sanctuary",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-amber-200 shadow-sm">
            <div className="mx-auto max-w-6xl flex justify-between items-center p-4 md:p-6">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">📚</span>
                </div>
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                  The Cozy Corner
                </h1>
              </Link>
              <nav className="flex gap-2 md:gap-4 text-sm md:text-base">
                <Link 
                  href="/" 
                  className="px-3 py-2 rounded-lg hover:bg-amber-100 transition-colors duration-300 text-amber-900 font-medium"
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="px-3 py-2 rounded-lg hover:bg-amber-100 transition-colors duration-300 text-amber-900 font-medium"
                >
                  About
                </Link>
                <Link 
                  href="/books" 
                  className="px-3 py-2 rounded-lg hover:bg-amber-100 transition-colors duration-300 text-amber-900 font-medium"
                >
                  Books
                </Link>
                <Link 
                  href="/contact" 
                  className="px-3 py-2 rounded-lg hover:bg-amber-100 transition-colors duration-300 text-amber-900 font-medium"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </header>
          
          <main className="flex-1 mx-auto max-w-6xl w-full p-4 md:p-8">
            {children}
          </main>
          
          <footer className="bg-gradient-to-r from-amber-900 to-orange-900 text-amber-50 py-8 mt-12">
            <div className="mx-auto max-w-6xl px-6">
              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div>
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    📚 The Cozy Corner
                  </h3>
                  <p className="text-amber-200 text-sm">
                    Your digital sanctuary for free books and meaningful stories.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Quick Links</h4>
                  <div className="flex flex-col gap-2 text-sm">
                    <Link href="/" className="text-amber-200 hover:text-white transition-colors">Home</Link>
                    <Link href="/about" className="text-amber-200 hover:text-white transition-colors">About Us</Link>
                    <Link href="/books" className="text-amber-200 hover:text-white transition-colors">Browse Books</Link>
                    <Link href="/contact" className="text-amber-200 hover:text-white transition-colors">Contact</Link>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Connect With Us</h4>
                  <p className="text-amber-200 text-sm">
                    Join our community of book lovers and never miss a new recommendation.
                  </p>
                </div>
              </div>
              <div className="border-t border-amber-700 pt-6 text-center text-sm text-amber-200">
                © 2026 The Cozy Corner. All rights reserved. | Made with ❤️ for readers everywhere
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}