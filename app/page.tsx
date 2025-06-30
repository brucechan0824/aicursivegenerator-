'use client'

import { useState, useEffect } from 'react'
import { Copy, Check, Sparkles, Heart, Star, Zap } from 'lucide-react'

// Unicode cursive transformations
const cursiveTransforms = {
  'Mathematical Bold Script': {
    mapping: {
      'A': '𝓐', 'B': '𝓑', 'C': '𝓒', 'D': '𝓓', 'E': '𝓔', 'F': '𝓕', 'G': '𝓖', 'H': '𝓗',
      'I': '𝓘', 'J': '𝓙', 'K': '𝓚', 'L': '𝓛', 'M': '𝓜', 'N': '𝓝', 'O': '𝓞', 'P': '𝓟',
      'Q': '𝓠', 'R': '𝓡', 'S': '𝓢', 'T': '𝓣', 'U': '𝓤', 'V': '𝓥', 'W': '𝓦', 'X': '𝓧',
      'Y': '𝓨', 'Z': '𝓩', 'a': '𝓪', 'b': '𝓫', 'c': '𝓬', 'd': '𝓭', 'e': '𝓮', 'f': '𝓯',
      'g': '𝓰', 'h': '𝓱', 'i': '𝓲', 'j': '𝓳', 'k': '𝓴', 'l': '𝓵', 'm': '𝓶', 'n': '𝓷',
      'o': '𝓸', 'p': '𝓹', 'q': '𝓺', 'r': '𝓻', 's': '𝓼', 't': '𝓽', 'u': '𝓾', 'v': '𝓿',
      'w': '𝔀', 'x': '𝔁', 'y': '𝔂', 'z': '𝔃'
    },
    className: 'cursive-math-bold'
  },
  'Mathematical Script': {
    mapping: {
      'A': '𝒜', 'B': '𝐵', 'C': '𝒞', 'D': '𝒟', 'E': '𝐸', 'F': '𝐹', 'G': '𝒢', 'H': '𝐻',
      'I': '𝐼', 'J': '𝒥', 'K': '𝒦', 'L': '𝐿', 'M': '𝑀', 'N': '𝒩', 'O': '𝒪', 'P': '𝒫',
      'Q': '𝒬', 'R': '𝑅', 'S': '𝒮', 'T': '𝒯', 'U': '𝒰', 'V': '𝒱', 'W': '𝒲', 'X': '𝒳',
      'Y': '𝒴', 'Z': '𝒵', 'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻',
      'g': '𝑔', 'h': '𝒽', 'i': '𝒾', 'j': '𝒿', 'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃',
      'o': '𝑜', 'p': '𝓅', 'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉', 'u': '𝓊', 'v': '𝓋',
      'w': '𝓌', 'x': '𝓍', 'y': '𝓎', 'z': '𝓏'
    },
    className: 'cursive-math-script'
  }
}

const fontStyles = [
  { name: 'Dancing Script', className: 'font-cursive-1', preview: 'Beautiful Cursive Text' },
  { name: 'Great Vibes', className: 'font-cursive-2', preview: 'Elegant Script Font' },
  { name: 'Pacifico', className: 'font-cursive-3', preview: 'Playful Typography' },
  { name: 'Kaushan Script', className: 'font-cursive-4', preview: 'Stylish Handwriting' },
]

export default function Home() {
  const [inputText, setInputText] = useState('Hello Beautiful World')
  const [selectedFont, setSelectedFont] = useState(fontStyles[0])
  const [selectedTransform, setSelectedTransform] = useState('Mathematical Bold Script')
  const [copiedFont, setCopiedFont] = useState<string | null>(null)
  const [copiedTransform, setCopiedTransform] = useState<string | null>(null)

  const transformText = (text: string, transformType: string) => {
    const transform = cursiveTransforms[transformType as keyof typeof cursiveTransforms]
    if (!transform) return text
    
    return text.split('').map(char => transform.mapping[char as keyof typeof transform.mapping] || char).join('')
  }

  const copyToClipboard = async (text: string, type: 'font' | 'transform', fontName?: string) => {
    try {
      await navigator.clipboard.writeText(text)
      if (type === 'font' && fontName) {
        setCopiedFont(fontName)
        setTimeout(() => setCopiedFont(null), 2000)
      } else if (type === 'transform') {
        setCopiedTransform(selectedTransform)
        setTimeout(() => setCopiedTransform(null), 2000)
      }
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Zap className="w-8 h-8 text-purple-600" />
                <Sparkles className="w-8 h-8 text-pink-500" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">AI Cursive Generator</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#generator" className="text-gray-600 hover:text-purple-600 transition-colors">Generator</a>
              <a href="/cursive-alphabet" className="text-gray-600 hover:text-purple-600 transition-colors">Cursive Alphabet</a>
              <a href="#fonts" className="text-gray-600 hover:text-purple-600 transition-colors">Fonts</a>
              <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">About</a>
              <a href="#faq" className="text-gray-600 hover:text-purple-600 transition-colors">FAQ</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            AI Cursive Generator
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Free AI-powered cursive generator to transform text into beautiful cursive fonts instantly. Best cursive text generator and cursive font generator with intelligent AI enhancement. Perfect for social media, design projects, and creative writing.
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section id="generator" className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
                             <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-500">
                <div className="flex items-center justify-between mb-4">
                  <label htmlFor="text-input" className="block text-lg font-semibold text-gray-900">
                    Enter Your Text
                  </label>
                  <div className="flex items-center space-x-1 text-purple-600">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-medium">AI Enhanced</span>
                  </div>
                </div>
                <textarea
                  id="text-input"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your text here..."
                  className="w-full h-32 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-lg"
                />
              </div>

              {/* Unicode Transforms */}
                             <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Unicode Cursive Styles</h3>
                  <div className="flex items-center space-x-1 text-blue-600">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-medium">AI Optimized</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {Object.keys(cursiveTransforms).map((transformType) => (
                    <div key={transformType} className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-700">{transformType}</span>
                        <button
                          onClick={() => copyToClipboard(transformText(inputText, transformType), 'transform')}
                          className="flex items-center space-x-1 px-3 py-1 bg-purple-100 hover:bg-purple-200 text-purple-700 rounded-lg transition-colors"
                        >
                          {copiedTransform === transformType ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                          <span className="text-sm">Copy</span>
                        </button>
                      </div>
                      <div className={`text-xl p-3 bg-gray-50 rounded-lg ${cursiveTransforms[transformType as keyof typeof cursiveTransforms].className}`}>
                        {transformText(inputText, transformType)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Output Section */}
            <div className="space-y-6">
                             <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-pink-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Cursive Font Styles</h3>
                  <div className="flex items-center space-x-1 text-pink-600">
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-medium">AI Powered</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {fontStyles.map((font) => (
                    <button
                      key={font.name}
                      onClick={() => setSelectedFont(font)}
                      className={`p-3 rounded-xl border-2 transition-all ${
                        selectedFont.name === font.name
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <div className={`text-lg ${font.className} text-center`}>
                        {font.preview}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">{font.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview and Copy */}
                             <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold text-gray-900">Preview & Copy</h3>
                    <div className="flex items-center space-x-1 text-green-600">
                      <Zap className="w-4 h-4" />
                      <span className="text-xs font-medium">AI Ready</span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(inputText, 'font', selectedFont.name)}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all"
                  >
                    {copiedFont === selectedFont.name ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                    <span>Copy Text</span>
                  </button>
                </div>
                <div className={`cursive-preview text-2xl p-6 bg-gray-50 rounded-xl ${selectedFont.className}`}>
                  {inputText || 'Your beautiful cursive text will appear here...'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our AI Cursive Generator?</h2>
            <p className="text-lg text-gray-600">Experience the best AI-powered cursive font generator and cursive text generator with intelligent features</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Generation</h3>
              <p className="text-gray-600">Transform your text to beautiful cursive fonts with advanced AI-enhanced real-time processing and intelligent optimization</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Smart Styles</h3>
              <p className="text-gray-600">Choose from various cursive fonts and Unicode transformations with AI-powered style recommendations</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Simplified Interface</h3>
              <p className="text-gray-600">Simple AI-powered interface - just type, let AI optimize, and copy your perfect cursive text</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is AI Cursive Generator & How Does It Stand Out?</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Cursive text is a smooth and flowing way of writing where letters join together naturally. 
                It was originally designed to make writing faster and more elegant than block letters. 
                While its use has declined with the rise of keyboards, cursive remains popular for artistic and creative purposes.
              </p>
              <p>
                Many people use cursive text in calligraphy, design, and stylish handwriting. Our AI cursive generator 
                combines the best features of a cursive font generator and cursive text generator with artificial intelligence, 
                making it easy to create beautiful cursive fonts for social media posts, design projects, invitations, 
                and creative work without needing special software or fonts. The AI enhancement ensures optimal font selection, smart rendering, and intelligent style recommendations.
              </p>
              <p>
                Our AI cursive generator uses advanced Unicode characters and smart artificial intelligence algorithms to transform regular text into stylish cursive letters, ensuring 
                compatibility across all platforms and devices. Whether you're creating content for Instagram, 
                designing wedding invitations, or adding a personal touch to your messages, our AI-powered cursive text generator 
                provides the perfect solution with intelligent font recommendations and automated optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guide */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Use the AI Cursive Generator</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Enter Your Text</h3>
                  <p className="text-gray-600">Type or paste your text in the input box. Watch as it transforms in real-time.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Choose Your Style</h3>
                  <p className="text-gray-600">Select from various cursive fonts or Unicode transformations to find your perfect style.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Copy & Use</h3>
                  <p className="text-gray-600">Click the copy button to copy your cursive text and paste it anywhere you need.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Share Everywhere</h3>
                  <p className="text-gray-600">Use your cursive text on social media, design projects, or any creative work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete AI Cursive Generator Solution</h2>
            <p className="text-lg text-gray-600">Your all-in-one AI cursive generator combining cursive text generator and cursive font generator features with intelligent AI-powered styling</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-900">Cursive Generator</h3>
              </div>
                             <p className="text-gray-600 mb-4">
                 Our primary cursive generator transforms any text into beautiful cursive styles instantly. 
                 The core cursive generator feature for quick conversions and everyday use.
               </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Multiple cursive styles</li>
                <li>• Real-time preview</li>
                <li>• One-click copying</li>
                <li>• Mobile optimized</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-6 h-6 text-pink-600" />
                <h3 className="text-xl font-semibold text-gray-900">Cursive Font Generator</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced cursive font generator with Unicode transformations and CSS font families. 
                Create professional-quality cursive fonts for any project.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Unicode cursive fonts</li>
                <li>• Mathematical scripts</li>
                <li>• Cross-platform compatibility</li>
                <li>• Professional quality</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-6 h-6 text-yellow-600" />
                <h3 className="text-xl font-semibold text-gray-900">Cursive Text Generator</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive cursive text generator for social media, design projects, and creative writing. 
                AI-enhanced for optimal results every time.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Social media ready</li>
                <li>• Design project compatible</li>
                <li>• Creative writing tools</li>
                <li>• AI optimization</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
                         <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our AI Cursive Generator?</h3>
             <div className="grid md:grid-cols-2 gap-8">
               <div>
                 <h4 className="font-semibold text-gray-900 mb-3">Traditional Cursive Generators vs Our AI Cursive Generator</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-600">Basic font conversion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">AI-optimized font selection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-600">Limited style options</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Intelligent style recommendations</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Perfect for Multiple Use Cases</h4>
                <div className="space-y-2 text-gray-600">
                  <p>✓ <strong>Social Media:</strong> Instagram, TikTok, Facebook posts</p>
                  <p>✓ <strong>Design:</strong> Logos, branding, invitations</p>
                  <p>✓ <strong>Education:</strong> Creative writing, presentations</p>
                  <p>✓ <strong>Personal:</strong> Messages, signatures, notes</p>
                  <p>✓ <strong>Professional:</strong> Marketing materials, websites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">What is an AI cursive generator?</h3>
              <p className="text-gray-600">An AI cursive generator is an advanced online tool that uses artificial intelligence to convert plain text into stylish cursive fonts. Our AI cursive generator combines features of both cursive text generator and cursive font generator, enhanced with AI for optimal font selection and intelligent styling. You can easily copy and paste the converted text into social media posts, designs, or creative projects.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">How do I turn my text into cursive writing?</h3>
              <p className="text-gray-600">Simply type your text into our AI cursive generator, and it will instantly transform into a beautiful cursive font with intelligent AI optimization. Our AI-powered cursive text generator function ensures perfect results every time. Just copy and paste it wherever you need!</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Can I use cursive text on Instagram and TikTok?</h3>
              <p className="text-gray-600">Yes! Our AI cursive generator creates Unicode-based text, which you can copy and paste into Instagram captions, TikTok bios, Facebook posts, and more without losing the style. Both AI-powered cursive font generator and cursive text generator features work perfectly on social media.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Can I generate cursive fonts for design projects?</h3>
              <p className="text-gray-600">Absolutely! Cursive fonts are great for logos, invitations, branding, and digital artwork. Just type your text, copy it, and use it in your creative designs.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Does copy-pasting cursive fonts retain formatting?</h3>
              <p className="text-gray-600">Yes! Since our tool uses Unicode symbols, the cursive text will keep its style on most platforms, including Instagram, TikTok, Twitter, and Facebook.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">What's the difference between AI cursive generator, cursive font generator, and cursive text generator?</h3>
              <p className="text-gray-600">While traditional cursive generator tools only do basic text conversion, our AI cursive generator combines advanced cursive font generator and cursive text generator features with artificial intelligence: smart font generation, intelligent text conversion, and AI-powered style optimization in one comprehensive tool.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Is the AI cursive generator free to use?</h3>
              <p className="text-gray-600">Yes! Our AI cursive generator is completely free. You can use both AI-powered cursive font generator and cursive text generator features unlimited times, copy and paste anywhere, with no restrictions or hidden fees.</p>
            </div>
          </div>
        </div>
      </section>

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
                <li><a href="#generator" className="hover:text-white transition-colors">AI Cursive Generator</a></li>
                <li><a href="/cursive-alphabet" className="hover:text-white transition-colors">Cursive Alphabet</a></li>
                <li><a href="#generator" className="hover:text-white transition-colors">Cursive Font Generator</a></li>
                <li><a href="#generator" className="hover:text-white transition-colors">Cursive Text Generator</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
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
                <li><a href="/about-us" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact-us" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</a></li>
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