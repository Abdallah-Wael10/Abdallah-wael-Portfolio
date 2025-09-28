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
      description: "Currently working as a full-time Frontend Developer, specializing in React.js and Next.js applications. Contributing to chatbot campaigns, landing pages, and innovative user interfaces. Also providing backend support with Node.js when required.",
      achievements: [
        "Developed interactive chatbot campaign systems",
        "Built responsive landing pages with modern UI/UX",
        "Collaborated with cross-functional teams on product development",
        "Provided Node.js backend support when needed"
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
      technologies: ["Next.js", "React.js", "Node.js", "Express.js", "Nest.js", "MongoDB", "PostgreSQL", "Tailwind CSS"],
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-50 to-red-50",
      iconColor: "text-orange-600"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Experience', icon: '🎯' },
    { key: 'current', label: 'Current Role', icon: '🚀' },
    { key: 'internship', label: 'Internships', icon: '🎓' },
    { key: 'freelance', label: 'Freelance', icon: '💼' }
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
      { threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

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
        className={`relative transition-all duration-1000 ${
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
        {/* Enhanced Timeline Line */}
        <div className={`absolute left-8 top-24 w-0.5 h-full transition-all duration-500 ${
          isHovered ? 'bg-gradient-to-b ' + experience.color : 'bg-gradient-to-b from-gray-200 to-transparent'
        }`}></div>
        
        {/* Animated Timeline Dot */}
        <div className={`absolute left-5 top-20 w-6 h-6 bg-gradient-to-r ${experience.color} rounded-full shadow-lg z-10 transition-all duration-500 ${
          isVisible ? 'scale-100' : 'scale-0'
        } ${isHovered ? 'scale-125 shadow-2xl' : ''} flex items-center justify-center`} 
        style={{ transitionDelay: `${index * 0.15 + 0.3}s` }}>
          <div className={`w-2 h-2 bg-white rounded-full transition-all duration-300 ${
            isHovered ? 'scale-150' : ''
          }`}></div>
        </div>

        {/* Floating Pulse Ring */}
        {isHovered && (
          <div className={`absolute left-5 top-20 w-6 h-6 bg-gradient-to-r ${experience.color} rounded-full opacity-30 animate-pulse-ring z-5`}></div>
        )}

        {/* Enhanced Card */}
        <div className="ml-20 mb-20">
          <div className={`relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-700 ${
            isHovered 
              ? 'shadow-2xl -translate-y-4 scale-[1.02] border-transparent' 
              : 'hover:shadow-2xl hover:-translate-y-2'
          }`}>
            
            {/* Animated Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${experience.bgColor} opacity-0 transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : ''
            }`}></div>

            {/* Header with Enhanced Design */}
            <div className={`relative bg-gradient-to-r ${experience.color} p-8 text-white overflow-hidden`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
              
              {/* Floating Orbs */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full transition-transform duration-700 ${
                isHovered ? 'scale-125 rotate-45' : ''
              }`}></div>
              <div className={`absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full transition-transform duration-700 ${
                isHovered ? 'scale-110 -rotate-12' : ''
              }`}></div>

              <div className="relative z-10 flex items-start justify-between">
                <div className="flex items-center space-x-6">
                  {/* Enhanced Logo Container */}
                  <div className={`relative w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl p-3 flex items-center justify-center transition-all duration-500 ${
                    isHovered ? 'bg-white/30 scale-110 rotate-3' : ''
                  }`}>
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      width={56}
                      height={56}
                      className={`rounded-2xl object-cover transition-transform duration-500 ${
                        isHovered ? 'scale-110' : ''
                      }`}
                    />
                    {/* Glow Effect */}
                    {isHovered && (
                      <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl scale-150"></div>
                    )}
                  </div>

                  <div className={`transition-transform duration-500 ${isHovered ? 'translate-x-2' : ''}`}>
                    <h3 className={`text-2xl md:text-3xl font-bold mb-2 transition-all duration-300 ${
                      isHovered ? 'text-shadow-lg' : ''
                    }`}>
                      {experience.position}
                    </h3>
                    <h4 className="text-xl md:text-2xl font-semibold opacity-90 mb-3">
                      {experience.company}
                    </h4>
                    <div className="flex items-center space-x-3">
                      <span className={`bg-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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
                  <div className="text-base font-semibold opacity-95">{experience.duration}</div>
                  <div className="text-sm opacity-80">{experience.period}</div>
                </div>
              </div>
            </div>

            {/* Enhanced Content */}
            <div className="relative p-8 md:p-10">
              {/* Description with Better Typography */}
              <div className={`transition-all duration-500 ${isHovered ? 'translate-y-1' : ''}`}>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg font-light">
                  {experience.description}
                </p>

                {/* Enhanced Achievements */}
                <div className="mb-8">
                  <h5 className={`text-xl font-bold mb-6 transition-colors duration-300 ${
                    isHovered ? experience.iconColor : 'text-gray-800'
                  }`}>
                    🎯 Key Achievements
                  </h5>
                  <ul className="space-y-4">
                    {experience.achievements.map((achievement, idx) => (
                      <li 
                        key={idx} 
                        className={`flex items-start space-x-4 transition-all duration-300 ${
                          isHovered ? 'translate-x-2' : ''
                        }`}
                        style={{ transitionDelay: `${idx * 0.1}s` }}
                      >
                        <div className={`w-3 h-3 bg-gradient-to-r ${experience.color} rounded-full mt-2 flex-shrink-0 transition-all duration-300 ${
                          isHovered ? 'scale-125 shadow-lg' : ''
                        }`}></div>
                        <span className="text-gray-700 font-medium">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enhanced Technologies */}
                <div>
                  <h5 className={`text-xl font-bold mb-6 transition-colors duration-300 ${
                    isHovered ? experience.iconColor : 'text-gray-800'
                  }`}>
                    🛠️ Technologies & Tools
                  </h5>
                  <div className="flex flex-wrap gap-3">
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-4 py-3 bg-gradient-to-r ${experience.bgColor} text-gray-700 rounded-xl text-sm font-semibold border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
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
            <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 pointer-events-none ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${experience.color} opacity-20 blur-xl`}></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="w-full min-h-screen py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-red-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-1/4 right-1/4 w-36 h-36 bg-gradient-to-r from-yellow-400/15 to-orange-500/15 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-24">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 shadow-lg mb-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700">Professional Journey</span>
          </div>

          {/* Enhanced Title */}
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-10">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Work
            </span>
            <br />
            <span className="text-gray-800">Experience</span>
          </h2>

          {/* Enhanced Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light mb-12">
            My professional journey through innovative companies and challenging projects,
            <br className="hidden md:block" />
            <span className="text-blue-600 font-medium">building expertise across the full stack.</span>
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/80 text-gray-700 hover:bg-white border border-gray-200 hover:shadow-lg'
                }`}
              >
                <span className="mr-2">{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "2+", label: "Years Experience", color: "from-blue-600 to-purple-600", icon: "⏱️" },
              { value: "4", label: "Companies", color: "from-green-600 to-emerald-600", icon: "🏢" },
              { value: "15+", label: "Projects", color: "from-orange-600 to-red-600", icon: "🚀" },
              { value: "100%", label: "Success Rate", color: "from-purple-600 to-pink-600", icon: "🎯" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-transparent opacity-30"></div>
          
          {filteredData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
                {/* CTA Section */}
                <div className="w-full max-w-4xl mx-auto px-4 mb-20">
          <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-dots-pattern"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let&apos;s collaborate and bring your vision to life with cutting-edge technology and innovative solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 rounded-2xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Let&apos;s Talk
                </a>
                
                <a 
                  href="mailto:abdallahwael558@gmail.com" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-2xl font-semibold hover:bg-white/20 backdrop-blur-sm transition-all duration-200 border border-white/20"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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