import React, { useState, useEffect } from 'react';

export default function PhilosopherPortfolio() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number}>>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Generate floating particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2
    }));
    setParticles(newParticles);

    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = [
    {
      title: "AI-Powered Content",
      subtitle: "Next-Gen Creation",
      icon: "⚡",
      gradient: "from-cyan-600 via-teal-600 to-cyan-500",
      description: "I transform concepts into compelling content using cutting-edge AI technology",
      details: [
        "AI-driven video production and intelligent editing",
        "Advanced content writing and copygeneration",
        "Product advertisement creation with AI optimization",
        "Expert prompt engineering for superior results"
      ]
    },
    {
      title: "Graphic Design",
      subtitle: "Visual Mastery",
      icon: "◆",
      gradient: "from-teal-600 via-cyan-600 to-sky-600",
      description: "I create stunning visuals that captivate and communicate with impact",
      details: [
        "Brand identity systems and visual strategies",
        "Marketing materials and digital asset creation",
        "Modern UI/UX design with user psychology",
        "Motion graphics and dynamic presentations"
      ]
    },
    {
      title: "Game Development",
      subtitle: "Interactive Worlds",
      icon: "▲",
      gradient: "from-sky-600 via-blue-600 to-cyan-600",
      description: "I build immersive experiences from initial concept to polished release",
      details: [
        "Game mechanics and systems design",
        "Unity and Unreal Engine development",
        "Multi-platform deployment expertise",
        "Engaging narratives and player experiences"
      ]
    },
    {
      title: "Web Development",
      subtitle: "Digital Architecture",
      icon: "■",
      gradient: "from-cyan-600 via-teal-600 to-emerald-600",
      description: "I craft powerful web solutions with modern frameworks and technologies",
      details: [
        "Full-stack application development",
        "React, Next.js, and TypeScript expertise",
        "Scalable architecture and optimization",
        "Progressive web apps and responsive design"
      ]
    },
    {
      title: "Crypto & Web3",
      subtitle: "Blockchain Intelligence",
      icon: "◉",
      gradient: "from-teal-600 via-cyan-600 to-blue-600",
      description: "I provide strategic insights and analysis in decentralized digital markets",
      details: [
        "Technical and fundamental market analysis",
        "NFT evaluation and alpha identification",
        "Token economics and trend forecasting",
        "Risk management and portfolio optimization"
      ]
    },
    {
      title: "Code Excellence",
      subtitle: "Technical Precision",
      icon: "◈",
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      description: "I deliver clean, efficient, and maintainable code solutions",
      details: [
        "Comprehensive code review and quality assurance",
        "Advanced debugging and troubleshooting",
        "Performance optimization and refactoring",
        "Documentation and best practices implementation"
      ]
    },
    {
      title: "Document Engineering",
      subtitle: "Content Transformation",
      icon: "◐",
      gradient: "from-cyan-600 via-sky-600 to-blue-600",
      description: "I offer expert multi-format content creation and conversion services",
      details: [
        "Professional PDF creation, editing, and conversion",
        "Presentation design and slideshow development",
        "Cross-format transformation (video ↔ article ↔ PDF)",
        "Technical documentation and knowledge systems"
      ]
    },
    {
      title: "Customer Success",
      subtitle: "Omnichannel Excellence",
      icon: "●",
      gradient: "from-teal-600 via-emerald-600 to-cyan-600",
      description: "I deliver exceptional support across every digital touchpoint",
      details: [
        "Multi-platform engagement (social, email, live chat)",
        "Technical support and product mastery",
        "Community management and brand advocacy",
        "24/7 global coverage and rapid response"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl transition-all duration-700"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, transparent 70%)',
            left: `${30 + mousePosition.x * 0.02}%`,
            top: `${20 + mousePosition.y * 0.02}%`,
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 70%)',
            right: `${20 + mousePosition.x * -0.015}%`,
            top: `${40 + scrollY * 0.05}%`,
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-3xl transition-all duration-1200"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
            left: `${50 + mousePosition.x * 0.01}%`,
            bottom: `${10 + scrollY * 0.03}%`,
          }}
        />0.3) 0%, transparent 70%)',
            left: `${50 + mousePosition.x * 0.01}%`,
            bottom: `${10 + scrollY * 0.03}%`,
          }}
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white/10 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.id * 0.2}s`,
              animationDuration: `${15 + particle.id * 0.5}s`
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full backdrop-blur-xl bg-slate-950/60 border-b border-white/5 z-50">
          <div className="max-w-7xl mx-auto px-8 py-5">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent">
                THE PHILOSOPHER
              </div>
              <div className="flex gap-8 items-center">
                <a href="https://x.com/Lil_Osopher" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 text-sm font-medium">
                  @Lil_Osopher
                </a>
                <a href="https://t.me/DeeChosenOne" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 text-sm font-medium">
                  @DeeChosenOne
                </a>
                <button
                  onClick={() => document.getElementById('hire')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-8 pt-24">
          <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 text-sm font-medium">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Remote • UK-Based • Available Globally
            </div>
            
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight leading-none">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent animate-gradient">
                Infinite Innovator
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-400 mb-6 font-light max-w-4xl mx-auto leading-relaxed">
              Problem Solver • Creative Pioneer • Multi-Talented Explorer
            </p>

            <p className="text-lg text-gray-500 mb-16 max-w-3xl mx-auto">
              I fearlessly venture into uncharted territories, transforming complex challenges into elegant solutions across AI, Web3, and beyond.
            </p>

            <div className="max-w-4xl mx-auto mb-16 p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-teal-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <p className="text-xl text-white mb-4 font-semibold">
                  I Turn Complexity Into Clarity
                </p>
                <p className="text-gray-400 leading-relaxed">
                  I bring cutting-edge technology and creative vision together to deliver exceptional digital experiences. Ready to start immediately with flexible arrangements and trial projects that prove real value.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Explore My Work
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              <button 
                onClick={() => document.getElementById('hire')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 rounded-xl border-2 border-white/20 text-white font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm">
                Start a Project
              </button>
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section id="skills" className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent">
                What I Do
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                My expertise across AI, blockchain, development, and design
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative"
                  onClick={() => setActiveSkill(activeSkill === index ? null : index)}
                >
                  {/* Glow Effect on Hover */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${skill.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
                  
                  {/* Card */}
                  <div className={`relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border backdrop-blur-xl transition-all duration-500 cursor-pointer ${
                    activeSkill === index 
                      ? 'border-white/30 scale-[1.02] shadow-2xl' 
                      : 'border-white/10 hover:border-white/20'
                  }`}>
                    <div className="flex items-start gap-6 mb-6">
                      <div 
                        className={`text-5xl transform transition-all duration-500 ${
                          activeSkill === index ? 'scale-110 rotate-12' : 'group-hover:scale-105'
                        }`}
                      >
                        <span className={`bg-gradient-to-br ${skill.gradient} bg-clip-text text-transparent`}>
                          {skill.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-gray-500 mb-2 tracking-widest uppercase">
                          {skill.subtitle}
                        </div>
                        <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}>
                          {skill.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      activeSkill === index ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-6 border-t border-white/10">
                        <ul className="space-y-3">
                          {skill.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                              <span className={`mt-1 bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent text-lg font-bold`}>•</span>
                              <span className="leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Click Indicator */}
                    <div className="mt-6 text-center">
                      <button className={`text-xs font-semibold tracking-wide uppercase transition-all duration-300 ${
                        activeSkill === index 
                          ? 'text-white' 
                          : 'text-gray-500 group-hover:text-gray-400'
                      }`}>
                        {activeSkill === index ? '↑ Show Less' : '↓ View Details'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work Together */}
        <section className="py-32 px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent" />
          <div className="max-w-6xl mx-auto relative">
            <h2 className="text-6xl md:text-7xl font-bold mb-24 text-center tracking-tight bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Why Work With Me?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "⚡", title: "Instant Impact", desc: "I hit the ground running with proven expertise from day one", gradient: "from-cyan-600 to-teal-600" },
                { icon: "🌐", title: "Global Availability", desc: "UK-based with seamless 24/7 coverage across all timezones", gradient: "from-blue-600 to-cyan-600" },
                { icon: "🚀", title: "Cutting Edge", desc: "I'm always leveraging the latest technologies and tools", gradient: "from-teal-600 to-cyan-600" },
                { icon: "💡", title: "Strategic Thinking", desc: "I solve root challenges, not just surface symptoms", gradient: "from-sky-600 to-blue-600" },
                { icon: "🎓", title: "Always Learning", desc: "I stay ahead of rapid industry changes and evolution", gradient: "from-cyan-600 to-sky-600" },
                { icon: "🤝", title: "Risk-Free Trial", desc: "I prove my value through initial project work first", gradient: "from-teal-600 to-emerald-600" }
              ].map((item, i) => (
                <div key={i} className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 backdrop-blur-sm relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="relative">
                    <div className="text-5xl mb-6">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="hire" className="py-32 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-fuchsia-600/10 to-pink-600/10" />
              
              <div className="relative text-center">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                  Let's Build the Future
                </h2>
                
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Ready to transform your vision into reality? Connect and let's explore the possibilities.
                </p>

                <div className="space-y-4 mb-12">
                  <a href="https://x.com/Lil_Osopher" target="_blank" rel="noopener noreferrer"
                     className="block px-8 py-5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-[1.02]">
                    🐦 Twitter: @Lil_Osopher
                  </a>
                  
                  <a href="https://t.me/DeeChosenOne" target="_blank" rel="noopener noreferrer"
                     className="block px-8 py-5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/50 hover:scale-[1.02]">
                    💬 Telegram: @DeeChosenOne
                  </a>
                  
                  <a href="mailto:deebestsolution@gmail.com"
                     className="block px-8 py-5 rounded-xl border-2 border-white/20 font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                    📧 deebestsolution@gmail.com
                  </a>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm mb-8">
                  <a href="https://x.com/_Pedastal_" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@_Pedastal_</a>
                  <span>•</span>
                  <a href="https://github.com/Philoso4er" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-gray-500 text-sm mb-4">Active Communities</p>
                  <div className="flex flex-wrap justify-center gap-6 text-sm">
                    <a href="https://x.com/TheDen_Alpha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors font-medium">
                      The Den Alpha
                    </a>
                    <span className="text-gray-700">•</span>
                    <a href="https://t.me/deechosenones" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors font-medium">
                      Dee Chosen Ones
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400 mb-3">
              Available for Full-Time • Part-Time • Contract • Freelance • Trial Projects
            </p>
            <p className="text-gray-600 text-sm">
              © 2025 The Philosopher • Remote Professional • UK-Based • Global Reach
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </div>
  );
}
