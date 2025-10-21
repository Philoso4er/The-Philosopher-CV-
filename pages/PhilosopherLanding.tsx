
import React, { useState, useEffect } from 'react';
import { Github, Twitter, Send, Briefcase, Users, PenTool, Handshake, Search, Palette, Code, CheckCircle, Clock, Globe, Zap, MessageSquare, Mail, ExternalLink, Gift } from '../components/icons';
import { Skill } from '../types';

const skills: Skill[] = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Customer Service & Product Mastery",
      done: [
        "Answered hundreds of technical questions about products I researched in-depth",
        "Reduced customer confusion by creating clear, simple explanations",
        "Maintained high satisfaction ratings through accurate, helpful responses"
      ],
      get: [
        "Someone who deeply researches YOUR product and becomes an instant expert",
        "Clear, professional communication that builds customer trust",
        "24/7 availability—no timezone barriers"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Moderation & Management",
      done: [
        "Moderated active Web3 communities, maintaining positive environments",
        "Handled conflicts diplomatically while enforcing guidelines",
        "Engaged members daily, answering questions and fostering discussions"
      ],
      get: [
        "A community that feels heard, supported, and valued",
        "Reduced workload for your core team",
        "Someone who represents your brand professionally at all hours"
      ]
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Copywriting & Content Creation",
      done: [
        "Written sales copy, marketing materials, and product documentation",
        "Created engaging social media content for Web3 projects",
        "Developed clear messaging that converts browsers into customers"
      ],
      get: [
        "Professional copy that speaks to your audience",
        "Content that educates and sells simultaneously",
        "Fast turnaround without sacrificing quality"
      ]
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Collaboration Management",
      done: [
        "Coordinated partnerships between projects and communities",
        "Managed cross-functional communications",
        "Facilitated successful collaborations from outreach to execution"
      ],
      get: [
        "Organized, proactive partnership management",
        "Clear communication across all stakeholders",
        "More partnerships, less chaos"
      ]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Research & Analysis (Web3 Focus)",
      done: [
        "Conducted deep-dive research on blockchain projects for alpha calling",
        "Analyzed tokenomics, team credentials, and market positioning",
        "Provided clear, actionable insights to community members"
      ],
      get: [
        "Thorough competitive analysis for your project",
        "Market intelligence that informs strategy",
        "Someone who understands Web3 inside and out"
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Work (Design & Visual Content)",
      done: [
        "Created graphics and visual content for social media",
        "Designed simple marketing materials",
        "Developed visual assets that communicate ideas quickly"
      ],
      get: [
        "Basic design work without hiring a dedicated designer",
        "Quick visual solutions for everyday needs",
        "Consistent brand representation"
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Basic Web Development",
      done: [
        "Built simple web applications using HTML, CSS, JavaScript",
        "Created functional prototypes and landing pages",
        "Solved technical problems with code when needed"
      ],
      get: [
        "Someone who can handle basic technical tasks",
        "Quick fixes without waiting on developers",
        "Understanding of technical concepts to bridge communication gaps"
      ]
    }
];

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
      <div 
        className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start gap-4">
          <div className="text-emerald-400 flex-shrink-0">
            {skill.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-emerald-400 font-semibold mb-2 text-sm">What I've Done:</p>
                <ul className="space-y-2">
                  {skill.done.slice(0, isExpanded ? undefined : 2).map((item, i) => (
                    <li key={i} className="text-slate-300 text-sm flex gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {isExpanded && (
                <div className="animate-fade-in-up">
                  <p className="text-amber-400 font-semibold mb-2 text-sm">What You Get:</p>
                  <ul className="space-y-2">
                    {skill.get.map((item, i) => (
                      <li key={i} className="text-slate-300 text-sm flex gap-2">
                        <Zap className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            <button className="text-emerald-400 text-sm mt-3 hover:text-emerald-300 transition-colors">
              {isExpanded ? '↑ Show Less' : '↓ See What You Get'}
            </button>
          </div>
        </div>
      </div>
    );
};

export default function PhilosopherLanding() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Referral links - easily editable. Kept empty as per original code.
  const [referralLinks] = useState<Array<{ title: string; description: string; url: string; category: string; }>>([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg border-b border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            The Philosopher
          </div>
          <div className="flex gap-4">
            <a href="https://x.com/Lil_Osopher" target="_blank" rel="noopener noreferrer"
               className="hover:text-emerald-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:deebestsolution@gmail.com"
               className="hover:text-emerald-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://t.me/DeeChosenOne" target="_blank" rel="noopener noreferrer" 
               className="hover:text-emerald-400 transition-colors">
              <Send className="w-5 h-5" />
            </a>
            <a href="https://github.com/Philoso4er" target="_blank" rel="noopener noreferrer"
               className="hover:text-emerald-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-500/30">
              🟢 Available Now | All Timezones | Trial Work Welcome
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            The Philosopher
          </h1>
          
          <p className="text-2xl md:text-3xl text-slate-300 mb-4">
            Your Remote Product Expert & Problem Solver
          </p>
          
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-2xl p-6 mt-8 backdrop-blur-sm">
            <p className="text-xl md:text-2xl text-emerald-400 font-semibold">
              My Superpower:
            </p>
            <p className="text-lg md:text-xl text-white mt-2">
              I can answer any specific question about your product or project—accurately, clearly, and confidently.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href="#hire" className="bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105">
              Hire Me Now
            </a>
            <a href="#skills" className="bg-slate-800 px-8 py-4 rounded-xl font-bold text-lg border border-slate-600 hover:border-emerald-500 transition-all duration-300">
              See My Skills
            </a>
          </div>
        </div>
      </section>

      {/* Why Hire Me */}
      <section id="why" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Why Hire Me? <span className="text-slate-400 text-2xl">(The 30-Second Pitch)</span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-8 text-center max-w-3xl mx-auto">
            You need someone who can <span className="text-emerald-400 font-semibold">explain your product to anyone, anytime</span>—whether it's to customers, investors, or your team. That's exactly what I do.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-xl border border-slate-600">
              <CheckCircle className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="text-xl font-bold mb-2">5+ Years Experience</h3>
              <p className="text-slate-300">Making complex projects simple and accessible</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-xl border border-slate-600">
              <Briefcase className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
              <p className="text-slate-300">Customer service, community management, content creation</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-xl border border-slate-600">
              <Clock className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="text-xl font-bold mb-2">Work Your Hours</h3>
              <p className="text-slate-300">Truly flexible across all timezones</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-xl border border-slate-600">
              <Zap className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="text-xl font-bold mb-2">Try Before You Buy</h3>
              <p className="text-slate-300">I'll work initially for free to prove my value</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            What I Actually Do
          </h2>
          <p className="text-xl text-slate-400 mb-12 text-center">Real Skills, Real Results</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Remote Work Section */}
      <section id="remote" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Remote Work = My Default Mode
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Fully self-directed—no hand-holding needed",
              "Own equipment & reliable internet",
              "Experienced with remote collaboration tools",
              "Work independently or integrate seamlessly with teams",
              "Clear communicator across written and video channels"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-700/50 p-4 rounded-lg">
                <Globe className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <p className="text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Education That Shows Versatility
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-bold text-emerald-400 mb-3">Bachelor of Engineering</h3>
              <p className="text-xl text-white mb-4">Petroleum Engineering</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">Analytical Thinking</span>
                <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">Problem-Solving</span>
                <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">Systems Approach</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-bold text-cyan-400 mb-3">Certified Massage Therapist</h3>
              <p className="text-xl text-white mb-4">Professional Certification</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">Client Service</span>
                <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">Attention to Detail</span>
                <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">People Skills</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Hire Me */}
      <section id="hire" className="py-20 px-6 bg-gradient-to-br from-emerald-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            How to Hire Me <span className="text-emerald-400">(It's This Easy)</span>
          </h2>
          
          <div className="space-y-6 mb-12">
            {[
              { step: 1, text: "Message me on any platform below" },
              { step: 2, text: "Tell me about your product/project" },
              { step: 3, text: "Give me a test task (I'll do it free to prove myself)" },
              { step: 4, text: "See the quality firsthand" },
              { step: 5, text: "Decide if you want to continue" }
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <p className="text-xl text-slate-200 mt-2">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-slate-800 p-8 rounded-2xl border-2 border-emerald-500">
            <p className="text-2xl font-bold text-emerald-400 mb-6">
              No contracts. No commitments. No risk.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:deebestsolution@gmail.com"
                 className="flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105">
                <Mail className="w-6 h-6" />
                Email: deebestsolution@gmail.com
              </a>
              
              <a href="https://t.me/DeeChosenOne" target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
                <Send className="w-6 h-6" />
                Telegram (Fastest Response)
              </a>
              
              <a href="https://x.com/Lil_Osopher" target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center gap-3 bg-slate-700 px-8 py-4 rounded-xl font-bold text-lg border border-slate-600 hover:border-cyan-500 transition-all duration-300">
                <Twitter className="w-6 h-6" />
                Twitter/X: @Lil_Osopher
              </a>
              
              <a href="https://github.com/Philoso4er" target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center gap-3 bg-slate-700 px-8 py-4 rounded-xl font-bold text-lg border border-slate-600 hover:border-emerald-500 transition-all duration-300">
                <Github className="w-6 h-6" />
                GitHub: Philoso4er
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-slate-300 mb-3">Community Involvement:</p>
              <div className="space-y-2">
                <a href="https://x.com/TheDen_Alpha" target="_blank" rel="noopener noreferrer"
                   className="block text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
                  The Den Alpha - Web3 Research Community
                </a>
                <a href="https://t.me/deechosenones" target="_blank" rel="noopener noreferrer"
                   className="block text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                  Dee Chosen Ones - Telegram Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What People Need */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            What People Need <span className="text-slate-400">(And What I Provide)</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { need: "Customer Questions?", provide: "I research and answer them accurately" },
              { need: "Coverage Gaps?", provide: "I work your timezone—any timezone" },
              { need: "Content Bottleneck?", provide: "I write, design, and create" },
              { need: "Community Chaos?", provide: "I moderate and engage professionally" },
              { need: "Product Confusion?", provide: "I make complex things simple" }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700">
                <p className="text-lg font-bold text-amber-400 mb-2">{item.need}</p>
                <p className="text-slate-300">{item.provide}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-2xl p-8">
            <p className="text-2xl md:text-3xl font-bold text-white">
              I'm the versatile remote team member who fills gaps, solves problems, and makes your life easier—starting today.
            </p>
          </div>
        </div>
      </section>

      {/* Referral Links Section */}
      {referralLinks.length > 0 && (
        <section className="py-20 px-6 bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Gift className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Recommended Links
              </h2>
              <p className="text-xl text-slate-400">
                Platforms and tools I personally use and recommend
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {referralLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {link.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  
                  {link.category && (
                    <span className="inline-block bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {link.category}
                    </span>
                  )}
                  
                  <p className="text-slate-300 text-sm">
                    {link.description}
                  </p>
                </a>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-400 text-sm">
                💡 These are referral links - using them supports my work at no extra cost to you
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400 mb-4">Available for: Full-time • Part-time • Contract • Freelance • Trial Projects</p>
          <p className="text-slate-500 text-sm">© 2025 The Philosopher. Ready to deliver value from day one.</p>
        </div>
      </footer>
    </div>
  );
}
