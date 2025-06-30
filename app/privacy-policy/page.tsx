import { Metadata } from 'next'
import { Zap, Sparkles, Shield, Eye, Lock, Users, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - AI Cursive Generator',
  description: 'Privacy Policy for AI Cursive Generator. Learn how we protect your data and privacy when using our AI-powered cursive text generator.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicy() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">
              Protecting your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when using AI Cursive Generator.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 2024</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Who We Are */}
            <section>
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Who We Are</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                AI Cursive Generator is dedicated to providing the best AI-powered cursive text generation experience. 
                Our commitment to privacy means that any information you share is handled responsibly and in accordance with this policy. 
                We believe in transparency and want you to understand exactly how we protect your data.
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <div className="flex items-center space-x-2 mb-4">
                <Eye className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              <p className="text-gray-700 mb-4">We may collect two types of information when you use our AI Cursive Generator:</p>
              
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                  <p className="text-gray-700">
                    Information you voluntarily provide, such as when you contact us or provide feedback. 
                    This may include your name, email address, or other contact details.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Usage Information</h3>
                  <p className="text-gray-700">
                    Data automatically collected about how you use our AI cursive generator, including:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li>Text you input for cursive conversion (processed locally, not stored)</li>
                    <li>Browser type and device information</li>
                    <li>Pages viewed and features used</li>
                    <li>Usage patterns and preferences</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">The information we collect is used to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Provide and improve our AI cursive generation service</li>
                <li>Analyze website usage to enhance user experience</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Maintain and improve site security and performance</li>
                <li>Develop new AI-powered features and improvements</li>
              </ul>
              <p className="text-gray-700 mt-4 font-medium">
                We do not sell, lease, or share your personal information with third parties, except as outlined in this policy or with your explicit consent.
              </p>
            </section>

            {/* Text Processing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Text Processing & AI Technology</h2>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>Important:</strong> The text you enter into our AI Cursive Generator is processed locally in your browser 
                  and converted to cursive fonts in real-time. We do not store, save, or transmit your input text to our servers. 
                  Your text remains private and is only used for the immediate cursive conversion you requested.
                </p>
              </div>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-700 mb-4">
                Our website uses cookies and similar technologies to enhance your experience:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand how visitors use our site</li>
                <li>Preference cookies to remember your settings</li>
              </ul>
              <p className="text-gray-700 mt-4">
                You can modify your browser settings to disable cookies, but this may affect your ability to use certain features of our AI Cursive Generator.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-4">We use the following third-party services:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Google Analytics:</strong> To understand user behavior and improve our service</li>
                <li><strong>Vercel:</strong> For website hosting and performance optimization</li>
                <li><strong>Google Fonts:</strong> For beautiful cursive font display</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Each of these providers maintains their own privacy policies, which we encourage you to review.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <div className="flex items-center space-x-2 mb-4">
                <Lock className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
              </div>
              <p className="text-gray-700 mb-4">
                We take reasonable precautions to protect your information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>HTTPS encryption for all data transmission</li>
                <li>Regular security updates and monitoring</li>
                <li>Limited access to personal data</li>
                <li>Secure hosting infrastructure</li>
              </ul>
              <p className="text-gray-700 mt-4 text-sm">
                However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700">
                AI Cursive Generator does not knowingly collect personal information from children under 13. 
                If we become aware that a child under 13 has provided personal information, we will promptly delete it. 
                If you are a parent or guardian and believe your child has shared information with us, please contact us immediately.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of certain data collection practices</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </section>

            {/* Updates to Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may periodically update this Privacy Policy to reflect changes in our practices or for legal compliance. 
                All updates will be posted on this page with a revised "last updated" date. 
                We encourage you to review this policy regularly to stay informed about how we protect your privacy.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-purple-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="text-gray-700">
                <p>Email: privacy@ai-cursive-generator.com</p>
                <p>Website: <Link href="/" className="text-purple-600 hover:text-purple-700 underline">AI Cursive Generator</Link></p>
              </div>
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