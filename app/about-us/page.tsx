import { Metadata } from 'next'
import { Zap, Sparkles, Target, Gift, Heart, Users, Mail } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - AI Cursive Generator',
  description: 'Learn about AI Cursive Generator - the leading AI-powered cursive text generator. Our mission, story, and commitment to making beautiful cursive fonts accessible to everyone.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutUs() {
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
              <Link href="/#fonts" className="text-gray-600 hover:text-purple-600 transition-colors">Fonts</Link>
              <Link href="/#about" className="text-gray-600 hover:text-purple-600 transition-colors">About</Link>
              <Link href="/#faq" className="text-gray-600 hover:text-purple-600 transition-colors">FAQ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
            <p className="text-lg text-gray-600">
              Welcome to AI Cursive Generator! Founded with a passion for beautiful typography and powered by artificial intelligence, 
              we&apos;re dedicated to making elegant cursive fonts accessible to everyone in the digital age.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Our Story */}
            <section>
              <div className="flex items-center space-x-2 mb-6">
                <Heart className="w-8 h-8 text-pink-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our journey began with a simple observation: while digital communication dominates our world, 
                  people still crave the elegance and personal touch that cursive writing brings. However, 
                  traditional cursive writing requires years of practice, and many beautiful cursive fonts are 
                  locked behind expensive software or complex design tools.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We believed there had to be a better way. By combining the timeless beauty of cursive typography 
                  with cutting-edge artificial intelligence, we created AI Cursive Generator - a tool that instantly 
                  transforms any text into stunning cursive fonts, making beautiful typography accessible to everyone, 
                  from social media enthusiasts to professional designers.
                </p>
              </div>
            </section>

            {/* Our Mission */}
            <section>
              <div className="flex items-center space-x-2 mb-6">
                <Target className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Democratize Beautiful Typography</h3>
                  <p className="text-gray-700">
                    We believe everyone deserves access to beautiful cursive fonts, regardless of their design skills 
                    or software budget. Our AI-powered tool makes professional-quality cursive text generation free and instant.
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Bridge Traditional & Digital</h3>
                  <p className="text-gray-700">
                    We&apos;re preserving the elegance of traditional cursive writing while making it perfectly suited 
                    for the digital world - from social media posts to modern design projects.
                  </p>
                </div>
              </div>
            </section>

            {/* What We Offer */}
            <section>
              <div className="flex items-center space-x-2 mb-6">
                <Gift className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Features</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center space-x-3">
                        <Zap className="w-5 h-5 text-purple-600" />
                        <span>Instant AI cursive text generation</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Zap className="w-5 h-5 text-purple-600" />
                        <span>Intelligent font selection and optimization</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Zap className="w-5 h-5 text-purple-600" />
                        <span>AI-enhanced style recommendations</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Zap className="w-5 h-5 text-purple-600" />
                        <span>Smart Unicode cursive transformations</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">User Experience</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center space-x-3">
                        <Sparkles className="w-5 h-5 text-pink-600" />
                        <span>Multiple beautiful cursive font styles</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Sparkles className="w-5 h-5 text-pink-600" />
                        <span>One-click copy and paste functionality</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Sparkles className="w-5 h-5 text-pink-600" />
                        <span>Real-time preview and editing</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Sparkles className="w-5 h-5 text-pink-600" />
                        <span>Cross-platform compatibility</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Why AI Cursive Writing? */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why AI-Powered Cursive Writing?</h2>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Expression</h3>
                    <p className="text-gray-600">
                      Cursive text adds personality and elegance to your digital communication, 
                      making your messages stand out in social media and design projects.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-pink-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Enhancement</h3>
                    <p className="text-gray-600">
                      Our artificial intelligence optimizes font selection and styling, 
                      ensuring perfect results every time without requiring design expertise.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Creative Freedom</h3>
                    <p className="text-gray-600">
                      From Instagram captions to wedding invitations, cursive fonts provide 
                      endless creative possibilities for personal and professional projects.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Commitment */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Always Free</h3>
                    <p className="text-gray-700 mb-4">
                      We believe beautiful typography should be accessible to everyone. Our AI cursive generator 
                      will always be free to use, with no hidden fees or premium restrictions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy First</h3>
                    <p className="text-gray-700 mb-4">
                      Your text is processed locally in your browser and never stored on our servers. 
                      Your privacy and data security are our top priorities.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Innovation</h3>
                    <p className="text-gray-700 mb-4">
                      We're constantly improving our AI algorithms and adding new features to provide 
                      the best cursive generation experience possible.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">User-Centered Design</h3>
                    <p className="text-gray-700 mb-4">
                      Every feature we build is designed with our users in mind, ensuring simplicity, 
                      efficiency, and beautiful results.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Join Us */}
            <section>
              <div className="flex items-center space-x-2 mb-6">
                <Users className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Join Our Community</h2>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center">
                <p className="text-lg text-gray-700 mb-6">
                  We invite you to explore our AI cursive generator and discover the joy of beautiful typography. 
                  Whether you're creating social media content, designing invitations, or adding elegance to your writing, 
                  our AI-powered tool is here to help you express yourself beautifully.
                </p>
                <Link
                  href="/#generator"
                  className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all"
                >
                  <Zap className="w-5 h-5" />
                  <span className="font-semibold">Try AI Cursive Generator</span>
                </Link>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-purple-50 rounded-xl p-8">
              <div className="flex items-center space-x-2 mb-6">
                <Mail className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                We&apos;d love to hear from you! Whether you have questions, feedback, or suggestions for new features, 
                don&apos;t hesitate to reach out. Your input helps us make AI Cursive Generator even better.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </section>
          </div>
        </div>
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
              <p className="text-gray-400">Transform your text into beautiful cursive fonts instantly with our free AI cursive generator. Best AI-powered cursive font generator and cursive text generator combined.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/#generator" className="hover:text-white transition-colors">AI Cursive Generator</Link></li>
                <li><Link href="/#generator" className="hover:text-white transition-colors">Cursive Font Generator</Link></li>
                <li><Link href="/#generator" className="hover:text-white transition-colors">Cursive Text Generator</Link></li>
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