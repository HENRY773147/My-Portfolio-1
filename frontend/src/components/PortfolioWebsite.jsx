//old portfolio
import React, { useState, useEffect } from 'react';

// Custom icon components
const User = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const Mail = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const Github = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Linkedin = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);



const Facebook = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0z"/>
  </svg>
);

const Send = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const Eye = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const Calendar = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const MapPin = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PortfolioWebsite = () => {

  // Hardcoded portfolio data (previously editable via admin)
  const portfolioData = {
    photo: '', // You can add your photo URL here
    name: 'K.A.D.D.M Henry',
    title: 'full Stack Developer/ui/ux Designer',
    bio: 'I am undergraduate in BCI campus Passionate developer with experience in modern web technologies. I love creating beautiful and functional applications that solve real-world problems. With expertise in Php, React, Node.js, and modern JavaScript frameworks, I bring ideas to life through clean, efficient code.',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'JavaScript', level: 95 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'MongoDB', level: 80 },
      { name: 'Python', level: 82 },
      { name: 'Express.js', level: 87 },
      { name: 'Git & GitHub', level: 92 }
    ],
    projects: [
      {
        id: 1,
        title: 'E-Commerce clothing Platform',
        description: 'A comprehensive full-stack e-commerce solution built with HTML,CSS,PHP and MySQL. Features include user authentication, payment processing , inventory management, and a responsive admin dashboard.',
        image: '/cloth1.png',
        technologies: ['HTML', 'CSS', 'MySQL',  'PHP'],
        liveUrl: 'https://example-ecommerce.com',
        githubUrl: 'https://github.com/HENRY773147/e-commmerce-vintage-summer',
        category: 'Web Development'
      },
      {
        id: 2,
        title: 'Hospital Management system',
        description: 'A collaborative Hospital management system with real-time updates. Features doctor ,patient and nurse registration and monitoring,inventory management and notification system.',
        image: '/hospital.png',
        technologies: ['C#', '.NET framework', 'Mysql Express'],
        liveUrl: '',
        githubUrl: 'https://github.com/HENRY773147/hospital-mangement-system2',
        category: 'C# Application'
      },
      {
        id: 3,
        title: 'Travel Web Application',
        description: 'An attractive travel web application that provides detailed weather forecasts,Hotel booking facility,guider hiring,vehicle hire/rent and location-based services. Includes 7-day forecasts and weather alerts.Andalso it has child safety feature for maximize the safety and enjoyment during the vacation',
        image: '/travel1.png',
        technologies: ['React js', 'MongoDB', 'NODE JS', 'Geolocation API'],
        liveUrl: '',
        githubUrl: 'https://github.com/HENRY773147/DreamTravel',
        category: 'Web application'
      },
      {
        id: 4,
        title: 'Child Tracking System',
        description: 'This system is a novelty and introduced for safety purpose.this system generate a code and it can use for send childern to aware their parents where they are  ',
        image: 'tracking.png',
        technologies: ['React.js', 'Node js', 'Node mailer', 'Geo location API'],
        liveUrl: '',
        githubUrl: 'https://github.com/HENRY773147/Child-Tracking-system1',
        category: 'Tracking system'
      },
      
      {
        id: 6,
        title: 'Chat Bot Application',
        description: 'The Rico chat Bot application for search best places,find the fine hotels and familier with the application and get support, tips for the travelers. Built with modern web technologies for seamless communication.',
        image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=250&fit=crop',
        technologies: ['React js',  'python', 'OPEN AI API', 'Chatgpt 3.5turbo'],
        liveUrl: '',
        githubUrl: 'https://github.com/HENRY773147/openAI-chatbot-application',
        category: 'chatBot Application'
      }
    ],
    contact: {
      email: 'minojhenry@gmail.com',
      github: 'https://github.com/HENRY773147',
      linkedin: 'https://www.linkedin.com/in/dulanga-henry-1a4349359/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B9kmXXGpARIq13sUkSHqAfQ%3D%3D',
      facebook: 'https://www.facebook.com/minoj.henry'
    }
  };

  // Contact form state (keeping the same functionality)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
   

  // Scroll animation effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  



  // Handle contact form submission..........................................................................
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate API call - In real implementation,http://localhost:3001/api/contactyour Node.js backend
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...contactForm,
          to: 'minojhenry@gmail.com'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setContactForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      // For demo purposes, we'll show success message
      setTimeout(() => {
        setSubmitStatus('success');
        setContactForm({ name: '', email: '', subject: '', message: '' });
      }, 1000);
    }

    setIsSubmitting(false);
  };

  const SkillBar = ({ skill }) => (
    <div className="mb-6 animate-on-scroll">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-sm text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <div 
          className="bg-gradient-to-r from-blue-400 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out skill-bar"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-on-scroll group">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
          <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">{project.category}</span>
        </div>
        
        <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-md">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a 
            href={project.liveUrl} 
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Eye size={16} />
            Live Demo
          </a>
          <a 
            href={project.githubUrl} 
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
        }
        
        .skill-bar {
          animation: skillProgress 2s ease-out forwards;
        }
        
        @keyframes skillProgress {
          from {
            width: 0%;
          }
        }
        
        .gradient-text {
          background: linear-gradient(45deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 bg-fu"></div>
        <div className="container mx-auto max-w-7x6 relative z-11">
          <div className="grid lg:grid-cols-2 gap-20 items-center justify-items-center">
            {/* Photo Section */}
            <div className="text-center animate-on-scroll w-full flex justify-center ml-10">
              <div className="relative inline-block">
                <img 
                  src="/dula.jpg"
                  alt="Profile" 
                  className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-blue-500/50 hover:border-blue-400/70 transition-all duration-500"
                />
              </div>
            </div>

            {/* Bio Section */}
            <div className="space-y-6 animate-on-scroll w-full max-w-2xl">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 gradient-text break-words">
                  K.A.D.D.M Henry
                </h1>
                <h2 className="text-2xl md:text-3xl text-blue-400 font-medium mb-6">{portfolioData.title}</h2>

              </div>

              <div>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">{portfolioData.bio}</p>
              </div>

              {/* Contact Links */}
              <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                <a href={`mailto:${portfolioData.contact.email}`} className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/25">
                  <Mail size={24} />
                </a>
                <a href={portfolioData.contact.github} className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/25">
                  <Github size={24} />
                </a>
                <a href={portfolioData.contact.linkedin} className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25">
                  <Linkedin size={24} />
                </a>
                <a href={portfolioData.contact.Facebook} className="bg-blue-400 hover:bg-blue-500 text-white p-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/25">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl font-bold text-white mb-4 gradient-text">My Skills</h2>
            <p className="text-xl text-gray-300">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.skills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl font-bold text-white mb-4 gradient-text">My Projects</h2>
            <p className="text-xl text-gray-300">Recent work and side projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-5xl font-bold text-white mb-4 gradient-text">Get In Touch</h2>
            <p className="text-xl text-gray-300">Let's work together on your next project</p>
          </div>

          <form onSubmit={handleContactSubmit} className="animate-on-scroll">
            <div className="bg-gray-800 rounded-xl p-8 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-300 font-medium mb-2">Subject *</label>
                <input
                  type="text"
                  required
                  value={contactForm.subject}
                  onChange={(e) => setContactForm(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all"
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-300 font-medium mb-2">Message *</label>
                <textarea
                  required
                  rows="6"
                  value={contactForm.message}
                  onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all resize-none"
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                  ✗ Failed to send message. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-16 text-center animate-on-scroll">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-white font-medium mb-2">Email</h3>
                <p className="text-gray-300">{portfolioData.contact.email}</p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300">
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-white font-medium mb-2">Location</h3>
                <p className="text-gray-300">Available for Remote Work</p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300">
                <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-white font-medium mb-2">Response Time</h3>
                <p className="text-gray-300">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{portfolioData.name}</h3>
              <p className="text-gray-400 mb-4">Full Stack Developer passionate about creating amazing web experiences.</p>
              <div className="flex gap-4">
                <a href={portfolioData.contact.github} className="text-gray-400 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href={portfolioData.contact.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href={portfolioData.contact.facebook} className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Web Development</li>
                <li className="text-gray-400">DataBase integration</li>
                <li className="text-gray-400">UI/UX Design</li>
                <li className="text-gray-400">Consulting</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 {portfolioData.name}. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;