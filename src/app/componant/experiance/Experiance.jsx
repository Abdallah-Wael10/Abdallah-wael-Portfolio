"use client"
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Codule from "./images/codule.jpeg"
import Egyweb from "./images/egyweb.jpeg"
import Cultiv from "./images/cultiv.jpeg"
import freeLance from "./images/free.png"

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const observerRef = useRef(null);

  const experienceData = [
    {
      id: 1,
      company: "Cultiv Bureau",
      position: "Frontend Developer",
      type: "Full-time",
      duration: "Aug 2025 - Present",
      period: "",
      location: "Office",
      logo: Cultiv,
      category: "current",
      description: "Currently working as a full-time Frontend Developer, specializing in React.js and Next.js applications. Contributing to systems , campaigns, landing pages, and innovative user interfaces. Also providing backend support with Node.js when required.",
      achievements: [
        "Developed comprehensive HR management system (Workhole HRM) with employee management, payroll, and reporting modules",
        "Built advanced CRM systems with customer relationship tracking, sales pipeline management, and analytics dashboards",
        "Created interactive chatbot campaign systems with AI-powered customer engagement and lead generation",
        "Designed and developed responsive landing pages with modern UI/UX and conversion optimization",
        "Built comprehensive admin dashboards with real-time analytics, data visualization, and reporting features",
        "Collaborated with cross-functional teams on product development and agile methodologies",
        "Provided Node.js backend support and API integration for various client projects"
      ],
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Material UI", "Node.js", "JavaScript", "Nest.js"],
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      company: "EGYWEB",
      position: "Full Stack Developer",
      type: "Internship",
      duration: "Feb 2025 - Apr 2025",
      period: "3 mos",
      location: "Cairo, Egypt",
      logo: Egyweb,
      category: "internship",
      description: "Worked as a Full-Stack Developer intern, building a fully dynamic website using Next.js and Tailwind CSS for the frontend, with Express.js and MongoDB for the backend. Gained extensive experience in full-stack development and API integration.",
      achievements: [
       "Built complete full-stack web applications from scratch",
        "Developed RESTful APIs using Express.js and MongoDB",
        "Implemented dynamic content management systems",
        "Collaborated with senior developers on real client projects",
        "Learned agile development methodologies"
      ],
      technologies: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS", "Node.js", "REST APIs"],
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      iconColor: "text-green-600"
    },
    {
      id: 3,
      company: "Codule",
      position: "Frontend Developer",
      type: "Internship",
      duration: "Apr 2024 - May 2024",
      period: "2 mos",
      location: "Remote",
      logo: Codule,
      category: "internship",
      description: "Worked as a frontend developer during a one-month internship, where I gained hands-on experience in modern frontend technologies and collaborative development practices.",
      achievements: [
        "Developed responsive user interfaces using React.js",
        "Collaborated with design team to implement pixel-perfect designs",
        "Gained experience in version control and team workflows",
        "Participated in code reviews and team meetings"
      ],
      technologies: ["React.js", "CSS3", "JavaScript", "HTML5", "Git"],
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      iconColor: "text-purple-600"
    },
    {
      id: 4,
      company: "Freelance Developer",
      position: "Full Stack Developer",
      type: "Freelance",
      duration: "Jan 2024 - Present",
      period: "12+ mos",
      location: "Remote",
      logo: freeLance,
      category: "freelance",
      description: "Working as an independent freelance developer, delivering custom web solutions for various clients. Specializing in modern web technologies and providing end-to-end development services.",
      achievements: [
        "Successfully completed 15+ client projects",
        "Built custom e-commerce solutions and portfolios",
        "Developed CRM and ERP systems for small businesses",
        "Maintained long-term client relationships with 100% satisfaction rate",
        "Managed projects from concept to deployment"
      ],
      technologies: ["Next.js", "React.js", "Node.js", "Express.js", "Nest.js", "MongoDB", "Tailwind CSS"],
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-50 to-red-50",
      iconColor: "text-orange-600"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Experience' },
    { key: 'current', label: 'Current Role' },
    { key: 'internship', label: 'Internships' },
    { key: 'freelance', label: 'Freelance' }
  ];

  const filteredData = activeFilter === 'all' 
    ? experienceData 
    : experienceData.filter(exp => exp.category === activeFilter);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.dataset.id]));
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Reset visible items when filter changes
  useEffect(() => {
    setVisibleItems(new Set());
  }, [activeFilter]);

  const ExperienceCard = ({ experience, index }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      if (cardRef.current && observerRef.current) {
        observerRef.current.observe(cardRef.current);
      }
    }, []);

    const isVisible = visibleItems.has(experience.id.toString());

    return (
      <div
        ref={cardRef}
        data-id={experience.id}
        className={`relative transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{ transitionDelay: `${index * 0.15}s` }}
        onMouseEnter={() => {
          setIsHovered(true);
          setHoveredCard(experience.id);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredCard(null);
        }}
      >
        {/* Enhanced Timeline Line - Hidden on mobile */}
        <div className={`absolute left-4 sm:left-8 top-16 sm:top-24 w-0.5 h-full transition-all duration-500 hidden sm:block ${
          isHovered ? 'bg-gradient-to-b ' + experience.color : 'bg-gradient-to-b from-gray-200 to-transparent'
        }`}></div>
        
        {/* Animated Timeline Dot - Hidden on mobile */}
        <div className={`absolute left-1 sm:left-5 top-12 sm:top-20 w-6 h-6 bg-gradient-to-r ${experience.color} rounded-full shadow-lg z-10 transition-all duration-500 hidden sm:flex ${
          isVisible ? 'scale-100' : 'scale-0'
        } ${isHovered ? 'scale-125 shadow-2xl' : ''} items-center justify-center`} 
        style={{ transitionDelay: `${index * 0.15 + 0.3}s` }}>
          <div className={`w-2 h-2 bg-white rounded-full transition-all duration-300 ${
            isHovered ? 'scale-150' : ''
          }`}></div>
        </div>

        {/* Floating Pulse Ring */}
        {isHovered && (
          <div className={`absolute left-1 sm:left-5 top-12 sm:top-20 w-6 h-6 bg-gradient-to-r ${experience.color} rounded-full opacity-30 animate-pulse-ring z-5 hidden sm:block`}></div>
        )}

        {/* Enhanced Card - Responsive margins and layout */}
        <div className="ml-0 sm:ml-20 mb-8 sm:mb-20 px-4 sm:px-0">
          <div className={`relative bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border border-gray-100 overflow-hidden transition-all duration-700 ${
            isHovered 
              ? 'shadow-xl sm:shadow-2xl -translate-y-2 sm:-translate-y-4 scale-[1.01] sm:scale-[1.02] border-transparent' 
              : 'hover:shadow-xl sm:hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2'
          }`}>
            
            {/* Animated Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${experience.bgColor} opacity-0 transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : ''
            }`}></div>

            {/* Header with Enhanced Design - Responsive */}
            <div className={`relative bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 sm:p-6 md:p-8 text-white overflow-hidden`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
              
              {/* Floating Orbs - Hidden on mobile for cleaner look */}
              <div className={`absolute -top-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full transition-transform duration-700 hidden sm:block ${
                isHovered ? 'scale-125 rotate-45' : ''
              }`}></div>
              <div className={`absolute -bottom-6 -left-6 w-20 sm:w-32 h-20 sm:h-32 bg-white/5 rounded-full transition-transform duration-700 hidden sm:block ${
                isHovered ? 'scale-110 -rotate-12' : ''
              }`}></div>

              <div className="relative z-10">
                {/* Mobile Layout */}
                <div className="block sm:hidden">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`relative w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl p-2 flex items-center justify-center transition-all duration-500 ${
                        isHovered ? 'bg-white/30 scale-110' : ''
                      }`}>
                        <Image
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          width={32}
                          height={32}
                          style={{ width: 'auto', height: 'auto' }}
                          className={`rounded-xl object-cover transition-transform duration-500 ${
                            isHovered ? 'scale-110' : ''
                          }`}
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold opacity-90">{experience.company}</h4>
                        <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                          {experience.type}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-semibold opacity-95">{experience.duration}</div>
                      <div className="text-xs opacity-80">{experience.period}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{experience.position}</h3>
                  {experience.location && (
                    <span className="text-sm opacity-75">📍 {experience.location}</span>
                  )}
                </div>

                {/* Desktop Layout */}
                <div className="hidden sm:flex items-start justify-between">
                  <div className="flex items-center space-x-6">
                    {/* Enhanced Logo Container */}
                    <div className={`relative w-16 md:w-20 h-16 md:h-20 bg-white/20 backdrop-blur-sm rounded-2xl md:rounded-3xl p-2 md:p-3 flex items-center justify-center transition-all duration-500 ${
                      isHovered ? 'bg-white/30 scale-110 rotate-3' : ''
                    }`}>
                      <Image
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        width={56}
                        height={56}
                        style={{ width: 'auto', height: 'auto' }}
                        className={`rounded-xl md:rounded-2xl object-cover transition-transform duration-500 ${
                          isHovered ? 'scale-110' : ''
                        }`}
                      />
                      {/* Glow Effect */}
                      {isHovered && (
                        <div className="absolute inset-0 bg-white/20 rounded-2xl md:rounded-3xl blur-xl scale-150"></div>
                      )}
                    </div>

                    <div className={`transition-transform duration-500 ${isHovered ? 'translate-x-2' : ''}`}>
                      <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold mb-2 transition-all duration-300 ${
                        isHovered ? 'text-shadow-lg' : ''
                      }`}>
                        {experience.position}
                      </h3>
                      <h4 className="text-lg md:text-xl lg:text-2xl font-semibold opacity-90 mb-3">
                        {experience.company}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          isHovered ? 'bg-white/30 scale-105' : ''
                        }`}>
                          {experience.type}
                        </span>
                        {experience.location && (
                          <span className={`text-sm opacity-75 transition-opacity duration-300 ${
                            isHovered ? 'opacity-90' : ''
                          }`}>
                            📍 {experience.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Duration with Enhanced Styling */}
                  <div className={`text-right transition-transform duration-500 ${
                    isHovered ? 'translate-x-2 scale-105' : ''
                  }`}>
                    <div className="text-sm md:text-base font-semibold opacity-95">{experience.duration}</div>
                    <div className="text-xs md:text-sm opacity-80">{experience.period}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Content - Responsive padding and spacing */}
            <div className="relative p-4 sm:p-6 md:p-8 lg:p-10">
              {/* Description with Better Typography */}
              <div className={`transition-all duration-500 ${isHovered ? 'translate-y-1' : ''}`}>
                <p className="text-gray-700 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg font-light">
                  {experience.description}
                </p>

                {/* Enhanced Achievements - Responsive */}
                <div className="mb-6 sm:mb-8">
                  <h5 className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 transition-colors duration-300 ${
                    isHovered ? experience.iconColor : 'text-gray-800'
                  }`}>
                    🎯 Key Achievements
                  </h5>
                  <ul className="space-y-3 sm:space-y-4">
                    {experience.achievements.map((achievement, idx) => (
                      <li 
                        key={idx} 
                        className={`flex items-start space-x-3 sm:space-x-4 transition-all duration-300 ${
                          isHovered ? 'translate-x-1 sm:translate-x-2' : ''
                        }`}
                        style={{ transitionDelay: `${idx * 0.1}s` }}
                      >
                        <div className={`w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r ${experience.color} rounded-full mt-2 flex-shrink-0 transition-all duration-300 ${
                          isHovered ? 'scale-125 shadow-lg' : ''
                        }`}></div>
                        <span className="text-gray-700 font-medium text-sm sm:text-base">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced Technologies - Responsive grid */}
                <div>
                  <h5 className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 transition-colors duration-300 ${
                    isHovered ? experience.iconColor : 'text-gray-800'
                  }`}>
                    🛠️ Technologies & Tools
                  </h5>
                  <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-2 sm:px-3 md:px-4 py-2 sm:py-3 bg-gradient-to-r ${experience.bgColor} text-gray-700 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg text-center ${
                          isHovered ? 'border-transparent shadow-md' : ''
                        }`}
                        style={{ transitionDelay: `${idx * 0.05}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hover Border Effect */}
            <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl transition-opacity duration-500 pointer-events-none ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${experience.color} opacity-20 blur-xl`}></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="w-full min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-5 sm:left-10 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-5 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-pink-400/20 to-red-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-20 sm:w-28 h-20 sm:h-28 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-1/4 right-1/4 w-28 sm:w-36 h-28 sm:h-36 bg-gradient-to-r from-yellow-400/15 to-orange-500/15 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header - Responsive */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 shadow-lg mb-6 sm:mb-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-blue-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700">Professional Journey</span>
          </div>

          {/* Enhanced Title - Responsive text sizes */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 md:mb-10">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Work
            </span>
            <br />
            <span className="text-gray-800">Experience</span>
          </h2>

          {/* Enhanced Subtitle - Responsive */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-8 sm:mb-12 px-4">
            My professional journey through innovative companies and challenging projects,
            <br className="hidden sm:block" />
            <span className="text-blue-600 font-medium">building expertise across the full stack.</span>
          </p>

          {/* Filter Buttons - Responsive grid */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 md:mb-16 px-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/80 text-gray-700 hover:bg-white border border-gray-200 hover:shadow-lg'
                }`}
              >
                <span className="hidden xs:inline sm:inline">{filter.label}</span>
                <span className="xs:hidden sm:hidden">{filter.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Enhanced Stats - Responsive grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { value: "2+", label: "Years Experience", color: "from-blue-600 to-purple-600", icon: "⏱️" },
              { value: "4", label: "Companies", color: "from-green-600 to-emerald-600", icon: "🏢" },
              { value: "15+", label: "Projects", color: "from-orange-600 to-red-600", icon: "🚀" },
              { value: "100%", label: "Success Rate", color: "from-purple-600 to-pink-600", icon: "🎯" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 group"
              >
                <div className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2`}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Timeline - Responsive */}
        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 w-0.5 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-transparent opacity-30 hidden sm:block"></div>
          
          {filteredData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* CTA Section - Responsive */}
        <div className="w-full max-w-4xl mx-auto px-4 mb-12 sm:mb-16 md:mb-20">
          <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-dots-pattern"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Let&apos;s collaborate and bring your vision to life with cutting-edge technology and innovative solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-600 rounded-xl sm:rounded-2xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-xl text-sm sm:text-base"
                >
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Let&apos;s Talk
                </a>
                
                <a 
                  href="mailto:abdallahwael558@gmail.com" 
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white rounded-xl sm:rounded-2xl font-semibold hover:bg-white/20 backdrop-blur-sm transition-all duration-200 border border-white/20 text-sm sm:text-base"
                >
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;