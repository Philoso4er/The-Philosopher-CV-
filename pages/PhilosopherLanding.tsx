import React, { useState, useEffect } from 'react';

export default function PhilosopherPortfolio() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    {
      title: "AI Content Creation",
      icon: "🤖",
      gradient: "from-violet-500 to-purple-600",
      description: "Expert in AI-powered video, text, and multimedia content creation",
      details: [
        "AI-generated video content and editing",
        "Advanced text generation and copywriting with AI tools",
        "Multi-modal content creation workflows",
        "Prompt engineering for optimal AI outputs"
      ]
    },
    {
      title: "Graphic Design Excellence",
      icon: "🎨",
      gradient: "from-pink-500 to-rose-600",
      description: "Professional design creating stunning visuals that captivate audiences",
      details: [
        "Brand identity and logo design",
        "Social media graphics and marketing materials",
        "UI/UX design for digital products",
        "Motion graphics and animations"
      ]
    },
    {
      title: "Game Development",
      icon: "🎮",
      gradient: "from-blue-500 to-cyan-600",
      description: "Creating engaging games from concept to deployment",
      details: [
        "Game mechanics and level design",
        "Unity and Unreal Engine development",
        "Mobile and web-based games",
        "Interactive storytelling experiences"
      ]
    },
    {
      title: "Web Development",
      icon: "💻",
      gradient: "from-emerald-500 to-teal-600",
      description: "Building modern web applications and responsive websites",
      details: [
        "Full-stack web application development",
        "React, Next.js, and modern frameworks",
        "Responsive design and mobile-first approach",
        "E-commerce and SaaS platforms"
      ]
    },
    {
      title: "Crypto Trading Expertise",
      icon: "📈",
      gradient: "from-amber-500 to-orange-600",
      description: "Deep market analysis and alpha calling in crypto markets",
      details: [
        "Technical and fundamental analysis",
        "NFT market research and alpha calls",
        "Memecoin trend identification",
        "Portfolio strategy and risk management"
      ]
    },
    {
      title: "AI Prompt Engineering",
      icon: "✨",
      gradient: "from-indigo-500 to-blue-600",
      description: "Master of crafting prompts that unlock AI potential",
      details: [
        "Advanced prompt crafting for ChatGPT, Claude, and more",
        "Chain-of-thought prompting techniques",
        "Custom GPT and assistant creation",
        "Workflow automation with AI tools"
      ]
    },
    {
      title: "Customer Success",
      icon: "🎯",
      gradient: "from-green-500 to-emerald-600",
      description: "Expert product knowledge and customer support excellence",
      details: [
        "Deep product research and documentation",
        "24/7 multi-timezone support coverage",
        "Technical troubleshooting and solutions",
        "Customer satisfaction optimization"
      ]
    },
    {
      title: "Community Leadership",
      icon: "👥",
      gradient: "from-purple-500 to-pink-600",
      description: "Building and nurturing engaged Web3 communities",
      details: [
        "Discord and Telegram community management",
        "Conflict resolution and moderation",
        "Engagement strategies and growth",
        "Brand ambassador programs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${50 + scrollY * 0.05}% ${50 + scrollY * 0.03}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/30 border-b border-white/10 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                THE PHILOSOPHER
              </div>
              <div className="flex gap-6 items-center">
                <a href="https://x.com/Lil_Osopher" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                  @Lil_Osopher
                </a>
                <a href="https://t.me/DeeChosenOne" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                  @DeeChosenOne
                </a>
                <a href="#hire"
                   className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm text-cyan-400 font-semibold text-sm">
                🌍 Remote | UK-Based | Available Globally
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Digital Innovation Expert
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-400 mb-8 max-w-3xl mx-auto">
              AI-Powered Creator • Web3 Specialist • Full-Stack Developer
            </p>

            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-lg mb-12">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-20" />
              <div className="relative">
                <p className="text-xl md:text-2xl text-white font-semibold mb-3">
                  Transform Your Vision Into Reality
                </p>
                <p className="text-gray-300 text-lg">
                  From AI-generated content to blockchain solutions, I deliver cutting-edge digital experiences that drive results. Ready to start immediately with flexible hours and trial projects.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 cursor-pointer">
                <span className="flex items-center gap-2">
                  Explore Skills
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              <button 
                onClick={() => document.getElementById('hire')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl border border-white/30 font-bold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm cursor-pointer">
                Hire Me Now
              </button>
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section id="skills" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Expertise Portfolio
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Cutting-edge skills across AI, blockchain, development, and design
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setActiveSkill(activeSkill === index ? null : index)}
                >
                  {/* Glow Effect */}
                  {hoveredCard === index && (
                    <div className={`absolute -inset-1 bg-gradient-to-r ${skill.gradient} rounded-2xl blur-xl opacity-50 transition-opacity duration-300`} />
                  )}
                  
                  {/* Card */}
                  <div className={`relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border transition-all duration-500 cursor-pointer ${
                    activeSkill === index 
                      ? 'border-white/30 scale-105' 
                      : 'border-white/10 hover:border-white/20'
                  }`}>
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`text-5xl transform transition-all duration-500 ${
                        activeSkill === index ? 'scale-125 rotate-12' : 'group-hover:scale-110'
                      }`}>
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}>
                          {skill.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {skill.description}
                        </p>
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      activeSkill === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-6 border-t border-white/10">
                        <ul className="space-y-3">
                          {skill.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${skill.gradient} text-lg`}>✦</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Click Indicator */}
                    <div className="mt-6 text-center">
                      <button className={`text-sm font-semibold transition-all duration-300 ${
                        activeSkill === index 
                          ? 'text-white' 
                          : 'text-gray-500 group-hover:text-gray-300'
                      }`}>
                        {activeSkill === index ? '↑ Less Details' : '↓ View Details'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Me */}
        <section className="py-32 px-6 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Why Work With Me?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: "⚡", title: "Instant Impact", desc: "Hit the ground running from day one with proven expertise" },
                { icon: "🌐", title: "Global Availability", desc: "UK-based with flexible hours across all timezones" },
                { icon: "🚀", title: "Cutting-Edge Tech", desc: "Always using the latest AI and development tools" },
                { icon: "💡", title: "Creative Solutions", desc: "Out-of-the-box thinking that solves complex problems" },
                { icon: "🎓", title: "Continuous Learning", desc: "Staying ahead of industry trends and innovations" },
                { icon: "🤝", title: "Risk-Free Start", desc: "Trial projects available to prove value before commitment" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="hire" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-lg">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-2xl opacity-20" />
              
              <div className="relative text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Let's Build Something Amazing
                </h2>
                
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                  Ready to transform your ideas into reality? Get in touch and let's discuss how I can help your project succeed.
                </p>

                <div className="space-y-4 mb-8">
                  <a href="https://x.com/Lil_Osopher" target="_blank" rel="noopener noreferrer"
                     className="block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                    🐦 Twitter: @Lil_Osopher
                  </a>
                  
                  <a href="https://t.me/DeeChosenOne" target="_blank" rel="noopener noreferrer"
                     className="block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-400 to-blue-500 font-bold text-lg hover:shadow-2xl hover:shadow-blue-400/50 transition-all duration-300 hover:scale-105">
                    💬 Telegram: @DeeChosenOne
                  </a>
                  
                  <a href="mailto:deebestsolution@gmail.com"
                     className="block px-8 py-4 rounded-xl border border-white/30 font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                    📧 deebestsolution@gmail.com
                  </a>
                </div>

                <div className="flex flex-wrap justify-center gap-4 text-gray-400">
                  <a href="https://x.com/_Pedastal_" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Twitter: @_Pedastal_</a>
                  <span>•</span>
                  <a href="https://github.com/Philoso4er" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">GitHub</a>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-gray-400 text-sm mb-4">Communities:</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a href="https://x.com/TheDen_Alpha" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                      The Den Alpha
                    </a>
                    <span className="text-gray-600">•</span>
                    <a href="https://t.me/deechosenones" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      Dee Chosen Ones
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400 mb-4">
              Available for: Full-time • Part-time • Contract • Freelance • Trial Projects
            </p>
            <p className="text-gray-600 text-sm">
              © 2025 The Philosopher • Remote Professional Based in UK • Global Reach
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
