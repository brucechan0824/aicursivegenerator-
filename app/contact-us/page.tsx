import { Metadata } from 'next'
import { Zap, Sparkles, Mail, MessageCircle, Send } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us - AI Cursive Generator',
  description: 'Get in touch with AI Cursive Generator team. We would love to hear your feedback, questions, or suggestions about our AI-powered cursive text generator.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactUs() {
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
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MessageCircle className="w-12 h-12 text-purple-600" />
              <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
            </div>
            <p className="text-lg text-gray-600">
              Have questions or feedback? At AI Cursive Generator, we&apos;re here to help! 
              Whether you need assistance with our AI cursive generator or want to share your creative journey, 
              feel free to reach out. We&apos;d love to hear from you!
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Email Contact */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-8 h-8 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Email Us</h2>
              </div>
              <p className="text-gray-700 mb-4">
                For general inquiries, feedback, or support with our AI cursive generator:
              </p>
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <p className="text-lg font-semibold text-purple-600">
                  contact@ai-cursive-generator.com
                </p>
              </div>
            </div>

            {/* Support Contact */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Send className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Technical Support</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Having trouble with our AI cursive generator? Need technical assistance?
              </p>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-lg font-semibold text-blue-600">
                  support@ai-cursive-generator.com
                </p>
              </div>
            </div>
          </div>

          {/* Quick Access */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Immediate Help?</h2>
            <p className="text-gray-700 mb-6">
              Check out our FAQ section for quick answers to common questions about our AI cursive generator, 
              or jump straight into using our tool!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#faq"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>View FAQ</span>
              </Link>
              <Link
                href="/#generator"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
              >
                <Zap className="w-5 h-5" />
                <span>Try AI Cursive Generator</span>
              </Link>
            </div>
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