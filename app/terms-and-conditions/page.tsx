import { Metadata } from 'next'
import { Zap, Sparkles, Shield, Scale, FileText, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms & Conditions - AI Cursive Generator',
  description: 'Terms and Conditions for AI Cursive Generator. Learn about our terms of service, user conduct, and legal policies for using our AI-powered cursive text generator.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsAndConditions() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-lg text-gray-600">
              By accessing and using AI Cursive Generator, you agree to be bound by these terms and conditions. 
              Please read them carefully before using our AI-powered cursive text generator service.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 2024</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <section>
              <div className="flex items-center space-x-2 mb-4">
                <Scale className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using AI Cursive Generator, you agree to comply with and be bound by these Terms & Conditions. 
                If you disagree with any part of these terms, please do not access or use our AI cursive generator service. 
                Your continued use of the website constitutes acceptance of these terms.
              </p>
            </section>

            {/* Modifications to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may revise these Terms & Conditions periodically to reflect changes in our AI cursive generator service, 
                legal requirements, or business practices. Any changes will be effective upon posting on this page. 
                Continued use of AI Cursive Generator after updates are posted signifies acceptance of those changes. 
                We recommend reviewing these terms regularly.
              </p>
            </section>

            {/* Service Description */}
            <section>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">AI Cursive Generator Service</h2>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700">
                  AI Cursive Generator is a free online tool that converts plain text into cursive fonts using artificial intelligence. 
                  Our service combines cursive font generator and cursive text generator capabilities with AI enhancement for optimal results.
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Text processing occurs locally in your browser for privacy</li>
                <li>AI-powered font selection and style optimization</li>
                <li>Unicode-based cursive text generation</li>
                <li>Cross-platform compatibility for social media and design</li>
              </ul>
            </section>

            {/* Website Content & Usage */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Website Content & Usage</h2>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Ownership</h3>
                  <p className="text-gray-700">
                    We own all materials on AI Cursive Generator, including designs, text, AI algorithms, graphics, 
                    and software code, protected by copyright and intellectual property laws.
                  </p>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Permitted Use</h3>
                  <p className="text-gray-700">
                    You may use our AI cursive generator service for personal, educational, and commercial projects. 
                    The cursive text you generate belongs to you and can be used freely in your own projects.
                  </p>
                </div>
                
                <div className="bg-red-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Prohibited Use</h3>
                  <p className="text-gray-700">
                    You may not copy, reproduce, or distribute our website code, AI algorithms, or create competing services 
                    based on our technology without explicit permission.
                  </p>
                </div>
              </div>
            </section>

            {/* User Conduct */}
            <section>
              <div className="flex items-center space-x-2 mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">User Conduct</h2>
              </div>
              <p className="text-gray-700 mb-4">By using AI Cursive Generator, you agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Use the service for any unlawful, threatening, or harmful purpose</li>
                <li>Generate content that violates laws, regulations, or third-party rights</li>
                <li>Attempt to reverse engineer, hack, or gain unauthorized access to our AI algorithms</li>
                <li>Introduce any harmful software, viruses, or malware</li>
                <li>Use automated systems to overload our servers or disrupt service</li>
                <li>Create content that is defamatory, offensive, or violates others' privacy</li>
              </ul>
            </section>

            {/* AI Technology & Limitations */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Technology & Limitations</h2>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-gray-700 mb-4">
                  Our AI cursive generator uses artificial intelligence to enhance text conversion. Please understand:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>AI suggestions are automated and may not always be perfect</li>
                  <li>Results may vary based on input text and selected fonts</li>
                  <li>We continuously improve our AI algorithms but cannot guarantee 100% accuracy</li>
                  <li>The service is provided "as-is" with reasonable effort for availability</li>
                </ul>
              </div>
            </section>

            {/* External Links */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">External Links</h2>
              <p className="text-gray-700">
                AI Cursive Generator may contain links to external websites (such as social media platforms, font resources, 
                or AI-related sites) that are not under our control. We are not responsible for the content, privacy policies, 
                or practices of any linked sites. Accessing these sites is at your own discretion and risk.
              </p>
            </section>

            {/* Disclaimer of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer of Liability</h2>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  Our AI cursive generator service is provided "as-is" for general use. We make no guarantees regarding 
                  the accuracy, completeness, or reliability of any AI-generated results, font conversions, or website functionality. 
                  AI Cursive Generator disclaims liability for any direct or indirect damages arising from your use of the service, 
                  including but not limited to data loss, business interruption, or unsatisfactory results.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700">
                Under no circumstances will AI Cursive Generator, its developers, or affiliates be liable for any direct, 
                indirect, incidental, special, or consequential damages arising from the use of our AI cursive generator service, 
                even if we have been advised of the possibility of such damages. This includes damages related to AI performance, 
                font rendering, or service availability.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Your Content</h3>
                  <p className="text-gray-700">
                    Text you input and cursive text generated by our AI belong to you. 
                    We do not claim ownership of your input or generated content.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Our Technology</h3>
                  <p className="text-gray-700">
                    Our AI algorithms, website design, code, and cursive generation technology remain our intellectual property 
                    and are protected by applicable laws.
                  </p>
                </div>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700">
                These Terms & Conditions are governed by the laws of the United States, without regard to conflict of law provisions. 
                Any legal proceedings arising out of these Terms shall be resolved through binding arbitration or filed in the appropriate 
                jurisdiction in the United States.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700">
                We reserve the right to suspend or terminate your access to AI Cursive Generator if you violate these Terms, 
                engage in harmful conduct, or misuse our AI technology, at our sole discretion. Upon termination, 
                your right to use the service ceases immediately.
              </p>
            </section>

            {/* Privacy Policy Reference */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
              <p className="text-gray-700">
                Our <Link href="/privacy-policy" className="text-purple-600 hover:text-purple-700 underline">Privacy Policy</Link>, 
                available on this website, outlines our data practices and is incorporated into these Terms by reference. 
                Please review our privacy practices to understand how we handle your information when using our AI cursive generator.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-purple-50 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
              </div>
              <p className="text-gray-700 mb-4">
                For questions or concerns about these Terms & Conditions, or issues related to our AI cursive generator service, 
                please contact us:
              </p>
              <div className="text-gray-700">
                <p>Email: legal@ai-cursive-generator.com</p>
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