"use client"
import React, { useState, useEffect, useMemo } from 'react'
import Card from '../card/page'
import crm from "./images/crmm.jpg"
import Devfux from "./images/devfux.jpg"
import burger from "./images/burger.jpg"
import realstate from "./images/realstate.jpg"
import hyber from "./images/hyber.jpg"
import powercem1 from "./images/powercembg.jpg"
import adam from "./images/adambg.jpg"
import bedo from "./images/bedobg.jpg"
import sneek from "./images/sneekbg.jpg"
import powercem2 from "./images/powercembg2.jpg"

// new images for projects
import NewCrm from "./images/new/crm.jpg"
import NewErp from "./images/new/erp.jpg"
import KhaledElGmaal from "./images/new/khaled.png"
import Rawafi from "./images/new/rawafi.png"
import Workhole from "./images/new/workhole.jpg"
import ChatbotCampaign from "./images/new/chatbot.png"

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Move data outside component or use useMemo to prevent recreation
  const data = useMemo(() => [
    {
      title: "Workhole HR System",
      desc: "A comprehensive HR system for time tracking with full frontend implementation and MVP backend development. Features employee management, time tracking, and reporting capabilities.",
      image: Workhole,
      status: "Private",
      category: "Full Stack",
      tech: ["React", "Node.js", "MongoDB"],
      github: "",
      live: "",
      featured: true
    },
    {
      title: "Rawafi Project Dashboard",
      desc: "Integration project between frontend and backend for Rawafi company, featuring a comprehensive dashboard with real-time data visualization and management tools.",
      image: Rawafi,
      status: "Private",
      category: "Frontend",
      tech: ["Next.js", "Express.js", "PostgreSQL"],
      github: "",
      live: "",
      featured: true
    },
    {
      title: "Cultiv Bureau Chatbot",
      desc: "An intelligent chatbot campaign system developed for Cultiv Bureau, featuring automated responses, lead generation, and customer engagement tools.",
      image: ChatbotCampaign,
      status: "Private",
      category: "Frontend",
      tech: ["React", "Node.js", "AI/ML"],
      github: "",
      live: "https://cultiv-landing-page.vercel.app/",
      featured: true
    },
    {
      title: "Khaled El Gmaal Backend",
      desc: "Backend API development for a luxury company in Khan El Khalili, featuring secure authentication, product management, and order processing systems.",
      image: KhaledElGmaal,
      status: "Private",
      category: "Backend",
      tech: ["Node.js", "Express.js", "MongoDB"],
      github: "",
      live: "",
      featured: false
    },
    {
      title: "Khaled El Gmaal Frontend",
      desc: "Responsive frontend application for a luxury goods company, featuring dynamic data rendering, modern UI/UX design, and full mobile optimization.",
      image: KhaledElGmaal,
      status: "Private",
      category: "Full Stack",

      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      github: "",
      live: "",
      featured: true
    },
    {
      title: "ERP Frontend System",
      desc: "Modern ERP frontend built with Next.js and Tailwind CSS for skill enhancement, featuring modular components and responsive design patterns.",
      image: NewErp,
      status: "Public",
      category: "Full Stack",

      tech: ["Next.js", "Tailwind CSS", "React"],
      github: "https://github.com/Abdallah-Wael10/ERP-Frontend",
      live: "https://erp-frontend-demo.vercel.app",
      featured: false
    },
    {
      title: "CRM Backend API",
      desc: "RESTful API backend for CRM system built with NestJS and MongoDB, featuring authentication, CRUD operations, and data validation.",
      image: NewCrm,
      status: "Public",
      category: "Backend",
      tech: ["NestJS", "MongoDB", "TypeScript"],
      github: "https://github.com/Abdallah-Wael10/crm-backend-nest.js",
      live: "",
      featured: false
    },
    {
      title: "ERP Backend API",
      desc: "Scalable backend API for ERP system using NestJS and MongoDB, implementing business logic, user management, and data processing.",
      image: NewErp,
      status: "Public",
      category: "Backend",
      tech: ["NestJS", "MongoDB", "JWT"],
      github: "https://github.com/Abdallah-Wael10/ERP-backend",
      live: "",
      featured: false
    },
    {
      title: "CRM Frontend Dashboard",
      desc: "Interactive CRM dashboard built with Next.js and Tailwind CSS, featuring data visualization, customer management, and responsive design.",
      image: NewCrm,
      status: "Public",
      category: "Full Stack",
      tech: ["Next.js", "Tailwind CSS", "Chart.js"],
      github: "https://github.com/Abdallah-Wael10/Crm-Frontend",
      live: "",
      featured: false
    },
    {
      title: "Powercem Agency Website",
      desc: "Professional website for Powercem Agency developed during EgyWeb company internship, featuring dynamic content management and full responsiveness.",
      image: powercem1,
      status: "Private",
      category: "Frontend",
      tech: ["Next.js", "Tailwind CSS", "CMS"],
      github: "",
      live: "",
      featured: false
    },
    {
      title: "Devfux Agency Platform",
      desc: "Complete agency platform with admin panel for Devfux Agency. Features JWT authentication, cookie management, and client website showcase.",
      image: Devfux,
      status: "Public",
      category: "Full Stack",
      tech: ["Next.js", "Express.js", "JWT"],
      github: "https://github.com/Abdallah-Wael10/devfux-frontend",
      live: "https://devfux-frontend.vercel.app",
      featured: false
    },
    {
      title: "Powercem Backend API",
      desc: "Backend infrastructure for Powercem Agency using Express.js and MongoDB, handling dynamic content delivery and data management.",
      image: powercem2,
      status: "Private",
      category: "Backend",
      tech: ["Express.js", "MongoDB", "Node.js"],
      github: "",
      live: "",
      featured: false
    },
    {
      title: "Adam Wael Portfolio",
      desc: "Professional portfolio website showcasing skills and projects, built with Next.js and Tailwind CSS with full responsive design.",
      image: adam,
      status: "Public",
      category: "Frontend",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Abdallah-Wael10/Adam-wael-Portfolio",
      live: "https://adamwael-portfolio.vercel.app/",
      featured: false
    },
    {
      title: "Abdallah Wael Portfolio",
      desc: "Personal portfolio website showcasing my development journey, projects, and technical skills with modern design and smooth animations.",
      image: bedo,
      status: "Public",
      category: "Frontend",
      tech: ["Next.js", "Tailwind CSS", "CSS Animations"],
      github: "https://github.com/Abdallah-Wael10/Abdallah-wael-Portfolio",
      live: "https://abdallah-wael-portfolio.vercel.app/",
      featured: false
    },
    {
      title: "Devfux Backend API",
      desc: "Backend service for Devfux Agency platform using Express.js and MongoDB, implementing JWT authentication and content management.",
      image: Devfux,
      status: "Public",
      category: "Backend",
      tech: ["Express.js", "MongoDB", "JWT"],
      github: "https://github.com/Abdallah-Wael10/devfux-backend",
      live: "",
      featured: false
    },
    {
      title: "Mini CRM System",
      desc: "Customer relationship management system for car protection company, featuring sales pipeline management and customer tracking.",
      image: crm,
      status: "Private",
      category: "Full Stack",
      tech: ["Next.js", "CSS", "Node.js"],
      github: "",
      live: "",
      featured: false
    },
    {
      title: "Burger Maker App",
      desc: "Interactive burger customization app built with vanilla JavaScript, featuring dynamic ingredient selection and responsive mobile design.",
      image: burger,
      status: "Public",
      category: "Frontend",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Abdallah-Wael10/Burger-Maker-Javascript",
      live: "https://burger-maker-pure-javascriptt-ewx5eic13.vercel.app/",
      featured: false
    },
    {
      title: "Real Estate Landing Page",
      desc: "Modern real estate landing page with advertising section, built using Next.js and Tailwind CSS with mobile-responsive design.",
      image: realstate,
      status: "Public",
      category: "Frontend",
      tech: ["Next.js", "Tailwind CSS", "Responsive"],
      github: "https://github.com/Abdallah-Wael10/Realstate-with-ads-landing-page-resp-on-mobile",
      live: "https://realstate-with-ads-landing-page-resp-on-mobile.vercel.app/",
      featured: false
    },
    {
      title: "Sneakers Landing Page",
      desc: "Clean and modern sneakers showcase landing page featuring product displays and mobile-optimized responsive design.",
      image: sneek,
      status: "Public",
      category: "Frontend",
      tech: ["Next.js", "Tailwind CSS", "Mobile-First"],
      github: "https://github.com/Abdallah-Wael10/Sneakers-Landing-Page-only-responsive-on-mobile-",
      live: "https://sneakers-landing-page-only-responsive-on-mobile.vercel.app/",
      featured: false
    },
    {
      title: "Hyber Auto Platform",
      desc: "Car buying and selling platform with responsive dashboard, built with Next.js and CSS. My first real-world project experience.",
      image: hyber,
      status: "Private",
      category: "Full Stack",
      tech: ["Next.js", "CSS", "Dashboard"],
      github: "",
      live: "",
      featured: false
    }
  ], []); // Empty dependency array since data is static

  const categories = useMemo(() => ['all', 'Frontend', 'Backend', 'Full Stack'], []);
  
  const publicProjects = useMemo(() => data.filter(project => project.status === 'Public'), [data]);
  const privateProjects = useMemo(() => data.filter(project => project.status === 'Private'), [data]);
  const featuredProjects = useMemo(() => data.filter(project => project.featured), [data]);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(data);
    } else {
      setFilteredProjects(data.filter(project => project.category === activeFilter));
    }
  }, [activeFilter, data]); // Now data is memoized

  return (
    <div id='projects' className='w-full min-h-screen relative overflow-hidden'>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="w-full max-w-7xl mx-auto px-4 pt-24 pb-16">
          <div className="text-center mb-20">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-100 shadow-lg mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Portfolio 2024</span>
            </div>

            {/* Main Title */}
            <h1 className='text-6xl md:text-7xl lg:text-8xl font-black mb-8'>
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Featured
              </span>
              <br />
              <span className="text-gray-800">Projects</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Crafting digital experiences that blend innovation with functionality. 
              <br className="hidden md:block" />
              <span className="text-indigo-600 font-medium">From concept to deployment.</span>
            </p>

            {/* Metrics Dashboard */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {data.length}+
                </div>
                <div className="text-gray-600 font-medium">Total Projects</div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  {publicProjects.length}
                </div>
                <div className="text-gray-600 font-medium">Open Source</div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                  {privateProjects.length}
                </div>
                <div className="text-gray-600 font-medium">Commercial</div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {featuredProjects.length}
                </div>
                <div className="text-gray-600 font-medium">Featured</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="w-full max-w-7xl mx-auto px-4 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              ✨ Featured Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Highlighted projects that showcase my best work and technical expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 6).map((project, index) => (
              <div key={`featured-${index}`} className="group">
                <Card 
                  title={project.title} 
                  desc={project.desc} 
                  image={project.image} 
                  githubb={project.github} 
                  livee={project.live} 
                  status={project.status}
                  tech={project.tech}
                  featured={true}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Filter Section */}
        <div className="w-full max-w-7xl mx-auto px-4 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">All Projects</h2>
              <p className="text-gray-600">Filter by technology stack or view all projects</p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                      : 'bg-white/70 text-gray-700 hover:bg-white border border-gray-200 hover:shadow-lg'
                  }`}
                >
                  {category === 'all' ? 'All Projects' : category}
                  <span className="ml-2 text-xs opacity-75">
                    ({category === 'all' ? data.length : data.filter(p => p.category === category).length})
                  </span>
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div key={`filtered-${project.title}-${index}`} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <Card 
                    title={project.title} 
                    desc={project.desc} 
                    image={project.image} 
                    githubb={project.github} 
                    livee={project.live} 
                    status={project.status}
                    tech={project.tech}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Project;
