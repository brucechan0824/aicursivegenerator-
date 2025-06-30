import { Metadata } from 'next'
import { Zap, Sparkles, BookOpen, CheckCircle, Star, ArrowRight, Brain } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cursive Alphabet A to Z - AI Cursive Generator | Learn Beautiful Cursive Letters',
  description: 'Master the cursive alphabet A to Z with our AI-powered cursive generator. Learn beautiful cursive letters, practice cursive alphabet writing, and generate stunning cursive text instantly.',
  keywords: 'cursive alphabet, cursive letters, cursive alphabet a to z, learn cursive alphabet, cursive writing alphabet, ai cursive alphabet, cursive letter generator',
  robots: {
    index: true,
    follow: true,
  },
}

export default function CursiveAlphabet() {
  const cursiveLetters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Zap className="w-8 h-8 text-purple-600" />
                <Sparkles className="w-8 h-8 text-pink-500" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">AI Cursive Generator</h1>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/#generator" className="text-gray-600 hover:text-purple-600 transition-colors">Generator</Link>
              <Link href="/cursive-alphabet" className="text-purple-600 font-medium">Cursive Alphabet</Link>
              <Link href="/#fonts" className="text-gray-600 hover:text-purple-600 transition-colors">Fonts</Link>
              <Link href="/#about" className="text-gray-600 hover:text-purple-600 transition-colors">About</Link>
              <Link href="/#faq" className="text-gray-600 hover:text-purple-600 transition-colors">FAQ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cursive Alphabet A to Z - Master Beautiful Cursive Letters with AI
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Welcome to AI Cursive Generator, your ultimate resource for mastering the <strong>cursive alphabet</strong> from A to Z! 
            Our AI-powered tool makes learning and generating the <strong>cursive alphabet</strong> effortless and fun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#generator"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all"
            >
              <Zap className="w-5 h-5" />
              <span className="font-semibold">Try AI Cursive Generator</span>
            </Link>
          </div>
        </div>

        {/* What is Cursive Alphabet */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Brain className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-900">What is the Cursive Alphabet?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The <strong>cursive alphabet</strong> is a beautiful and flowing style of handwriting where each letter in the 
                  <strong>cursive alphabet</strong> connects smoothly to form elegant words. Unlike print letters, the <strong>cursive alphabet</strong> 
                  features graceful curves, loops, and connecting strokes that make writing faster and more artistic.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our AI Cursive Generator revolutionizes how you interact with the <strong>cursive alphabet</strong> by instantly 
                  transforming any text into beautiful <strong>cursive alphabet</strong> letters. Whether you need the entire 
                  <strong>cursive alphabet</strong> or specific letters, our AI technology ensures perfect formation and style every time.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Enhanced Cursive Alphabet Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Instant <strong>cursive alphabet</strong> generation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Perfect <strong>cursive alphabet</strong> letter formation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Multiple <strong>cursive alphabet</strong> styles</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">AI-optimized <strong>cursive alphabet</strong> spacing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Learn Cursive Alphabet */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Master the Cursive Alphabet?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Creativity</h3>
                <p className="text-gray-700">
                  Learning the <strong>cursive alphabet</strong> enhances your creative expression. Each letter in the 
                  <strong>cursive alphabet</strong> adds elegance and personality to your writing, making it perfect for 
                  artistic projects and personal communication.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cognitive Benefits</h3>
                <p className="text-gray-700">
                  Practicing the <strong>cursive alphabet</strong> improves brain function, memory, and hand-eye coordination. 
                  The flowing movements required for the <strong>cursive alphabet</strong> stimulate neural pathways and enhance learning.
                </p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Impact</h3>
                <p className="text-gray-700">
                  Mastering the <strong>cursive alphabet</strong> creates a professional impression. Whether for signatures, 
                  formal documents, or design work, beautiful <strong>cursive alphabet</strong> letters convey sophistication and attention to detail.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cursive Alphabet Display */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Cursive Alphabet A to Z</h2>
              <p className="text-lg text-gray-600">
                Explore every letter of the <strong>cursive alphabet</strong> below. Our AI Cursive Generator can instantly 
                transform any of these <strong>cursive alphabet</strong> letters into beautiful, flowing text for your projects.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
              {cursiveLetters.map((letter) => (
                <div key={letter} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-2 text-purple-600 font-serif italic">{letter}</div>
                  <div className="text-sm text-gray-600">Cursive {letter}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 text-center">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Want to use any of these cursive alphabet letters?</strong> Our AI Cursive Generator can instantly 
                create beautiful <strong>cursive alphabet</strong> text using any combination of these letters!
              </p>
              <Link
                href="/#generator"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Zap className="w-5 h-5" />
                <span>Generate Cursive Alphabet Text</span>
              </Link>
            </div>
          </div>
        </section>

        {/* How to Master Cursive Alphabet */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How to Master the Cursive Alphabet with AI Assistance
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Start with AI-Generated Examples</h3>
                    <p className="text-gray-700">
                      Begin your <strong>cursive alphabet</strong> journey by using our AI generator to see perfect examples 
                      of each <strong>cursive alphabet</strong> letter. This gives you ideal models to practice with.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Practice Individual Cursive Alphabet Letters</h3>
                    <p className="text-gray-700">
                      Focus on mastering each letter of the <strong>cursive alphabet</strong> individually. Start with easier 
                      <strong>cursive alphabet</strong> letters like &apos;a&apos;, &apos;c&apos;, and &apos;o&apos; before moving to more complex ones.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Learn Cursive Alphabet Connections</h3>
                    <p className="text-gray-700">
                      Understanding how <strong>cursive alphabet</strong> letters connect is crucial. Practice joining different 
                      <strong>cursive alphabet</strong> letters to create smooth, flowing words.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Use AI for Instant Reference</h3>
                    <p className="text-gray-700">
                      Whenever you need a perfect <strong>cursive alphabet</strong> reference, use our AI generator. 
                      It provides consistent, beautiful <strong>cursive alphabet</strong> examples instantly.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Practice with Common Words</h3>
                    <p className="text-gray-700">
                      Apply your <strong>cursive alphabet</strong> knowledge by writing common words. This helps you 
                      understand how the complete <strong>cursive alphabet</strong> works in practical writing.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Create Projects with Your Cursive Alphabet Skills</h3>
                    <p className="text-gray-700">
                      Use your mastered <strong>cursive alphabet</strong> knowledge for real projects. Our AI generator 
                      can help you create professional <strong>cursive alphabet</strong> text for any purpose.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cursive Alphabet FAQ</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What is the best way to learn the cursive alphabet?</h3>
                <p className="text-gray-700">
                  The best way to learn the <strong>cursive alphabet</strong> is through consistent practice combined with perfect examples. 
                  Our AI Cursive Generator provides ideal <strong>cursive alphabet</strong> models for each letter, making learning more 
                  effective and enjoyable. Start with individual <strong>cursive alphabet</strong> letters, then practice connecting them.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How long does it take to master the cursive alphabet?</h3>
                <p className="text-gray-700">
                  Mastering the <strong>cursive alphabet</strong> typically takes 2-3 months with regular practice. Using our AI Cursive Generator 
                  can accelerate your learning by providing perfect <strong>cursive alphabet</strong> examples and instant feedback. 
                  Practice the entire <strong>cursive alphabet</strong> daily for best results.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Which cursive alphabet letters are hardest to learn?</h3>
                <p className="text-gray-700">
                  In the <strong>cursive alphabet</strong>, letters like &apos;Q&apos;, &apos;X&apos;, &apos;Z&apos;, and &apos;F&apos; are often considered more challenging. 
                  Our AI generator can help you practice these difficult <strong>cursive alphabet</strong> letters by showing perfect 
                  examples and helping you understand their formation patterns.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I use AI to help learn the cursive alphabet?</h3>
                <p className="text-gray-700">
                  Absolutely! AI is an excellent tool for learning the <strong>cursive alphabet</strong>. Our AI Cursive Generator 
                  provides perfect <strong>cursive alphabet</strong> examples, helps with letter formation, and can generate any 
                  <strong>cursive alphabet</strong> combination you need for practice. It&apos;s like having a perfect cursive writing teacher available 24/7.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Master the Cursive Alphabet with AI?</h2>
            <p className="text-xl mb-8 opacity-90">
              Start your <strong>cursive alphabet</strong> journey today with our AI-powered generator. 
              Create beautiful <strong>cursive alphabet</strong> text instantly and learn perfect letter formation!
            </p>
            <Link
              href="/#generator"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              <Zap className="w-6 h-6" />
              <span>Start Creating Cursive Alphabet Text Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-6 h-6 text-purple-400" />
                <Sparkles className="w-6 h-6 text-pink-400" />
                <span className="text-xl font-bold">AI Cursive Generator</span>
              </div>
              <p className="text-gray-400">Transform your text into beautiful cursive fonts instantly with our free AI cursive generator.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/#generator" className="hover:text-white transition-colors">AI Cursive Generator</Link></li>
                <li><Link href="/cursive-alphabet" className="hover:text-white transition-colors">Cursive Alphabet</Link></li>
                <li><Link href="/#about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Use Cases</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Social Media Posts</li>
                <li>Design Projects</li>
                <li>Wedding Invitations</li>
                <li>Creative Writing</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Cursive Generator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 