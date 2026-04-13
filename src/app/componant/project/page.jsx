"use client"
import React, { useState, useEffect, useMemo } from 'react'
import Card from '../card/page'
import NewCrm from "./images/new/crm.jpg"
import NewErp from "./images/new/erp.jpg"
import Rawafi from "./images/new/rawafi.png"
import Workhole from "./images/new/workhole.jpg"

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Move data outside component or use useMemo to prevent recreation
  const data = useMemo(() => [
    {
      title: "Secure Infrastructure & Domain Architecture",
      desc: "Designed a secure AD DS architecture with parent/child domains and structured OUs, enforced hardening with GPOs and NTFS least privilege, implemented secure file sharing with quotas and VSS, and configured DNS, DHCP, and VPN for resilient remote operations.",
      image: Workhole,
      status: "Public",
      category: "Infrastructure Security",
      tech: ["Active Directory", "GPO", "Windows Server", "DNS/DHCP", "VPN"],
      github: "",
      live: "",
      featured: true
    },
    {
      title: "Automated Threat Detection and Windows Log Forensics",
      desc: "Engineered an incident response workflow to parse Sysmon, Security, and Application logs using wevtutil and EvtxECmd, reconstructed attacker behavior with timeline analysis, and accelerated triage with Chainsaw and Sigma-based detections.",
      image: Rawafi,
      status: "Public",
      category: "DFIR",
      tech: ["Sysmon", "EvtxECmd", "Timeline Explorer", "Chainsaw", "Sigma"],
      github: "",
      live: "",
      featured: true
    },
    {
      title: "Azure Arc & Sentinel Hybrid Cloud Integration",
      desc: "Configured DCR-driven AMA deployment for cloud VMs, onboarded on-prem Windows Servers via Azure Arc, validated telemetry with KQL, and built a custom CSV ingestion pipeline using DCE and PowerShell scripts.",
      image: NewErp,
      status: "Public",
      category: "Cloud Security",
      tech: ["Azure Arc", "Microsoft Sentinel", "AMA", "KQL", "PowerShell"],
      github: "",
      live: "",
      featured: true
    },
    {
      title: "Enterprise SIEM Deployment & Analytics (IBM QRadar)",
      desc: "Architected SIEM telemetry ingestion with WinCollect and rsyslog across Windows and Linux, engineered custom DSM/QID mappings with regex parsing, and authored advanced event/flow correlation rules with dynamic reference sets.",
      image: NewCrm,
      status: "Public",
      category: "SIEM Engineering",
      tech: ["IBM QRadar", "WinCollect", "rsyslog", "Regex", "Correlation Rules"],
      github: "",
      live: "",
      featured: true
    }
  ], []); // Empty dependency array since data is static

  const categories = useMemo(() => ['all', ...new Set(data.map(project => project.category))], [data]);
  
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
              <span className="text-sm font-medium text-gray-700">Cybersecurity Portfolio</span>
            </div>

            {/* Main Title */}
            <h1 className='text-6xl md:text-7xl lg:text-8xl font-black mb-8'>
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                Security
              </span>
              <br />
              <span className="text-gray-800">Projects</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Building practical security solutions that improve detection, response, and resilience.
              <br className="hidden md:block" />
              <span className="text-indigo-600 font-medium">From architecture to operational analytics.</span>
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
              Highlighted cybersecurity projects covering DFIR, SIEM engineering, and cloud security integration
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
