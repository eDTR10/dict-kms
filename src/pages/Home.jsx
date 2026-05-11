import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Carousel from '../components/Carousel';

const PROJECTS = [
  {
    logo: '/Free Wifi.png',
    title: 'Free Wi-Fi',
    description: 'Free public Wi-Fi access points deployed across Region 10 communities.',
    path: '/projects/free-wifi',
    color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
    logoBg: 'bg-[#1a1a4e]',
  },
  {
    logo: '/ILCDB.png',
    title: 'ILCDB',
    description: 'ICT Livelihood & Community Development Barangay program beneficiaries and reports.',
    path: '/projects/ilcdb',
    color: 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800',
    logoBg: 'bg-[#0038A8]',
  },
  {
    logo: '/eGovPH Logo.png',
    title: 'eGov (NGP)',
    description: 'Electronic Government and National Government Portal deployment status.',
    path: '/projects/egov',
    color: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800',
    logoBg: 'bg-white',
  },
  {
    logo: '/PNPKI.jpg',
    title: 'Cybersecurity / PNPKI',
    description: 'Philippine National Public Key Infrastructure and cybersecurity readiness reports.',
    path: '/projects/cybersecurity',
    color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    logoBg: 'bg-white',
  },
  {
    logo: '/NBP.png',
    title: 'NBP / CDO GovNet',
    description: 'National Broadband Program and Cagayan de Oro Government Network connectivity.',
    path: '/projects/govnet',
    color: 'bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800',
    logoBg: 'bg-[#2d4a6e]',
  },
  {
    logo: '/eLGU Logo.png',
    title: 'eLGU',
    description: 'Electronic Local Government Unit operations and automation program.',
    path: '/projects/elgu',
    color: 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800',
    logoBg: 'bg-white',
  },
  {
    logo: '/IIDB.png',
    title: 'IIDB',
    description: 'ICT Industry Development Bureau – Region 10 enterprises and ICT professionals.',
    path: '/projects/iidb',
    color: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800',
    logoBg: 'bg-white',
  },
  {
    logo: '/NIPPSB.png',
    title: 'NIPPSB',
    description: 'National ICT Proficiency and Performance Standard for Barangays program report.',
    path: '/projects/nippsb',
    color: 'bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800',
    logoBg: 'bg-white',
  },
];

const   container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Home() {
  return (
    <div className="dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-[#0038A8] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #FCD116 0%, transparent 60%), radial-gradient(circle at 80% 20%, #CE1126 0%, transparent 50%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-6">
              <span className="w-2 h-2 bg-[#FCD116] rounded-full animate-pulse" />
              Knowledge Management System
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight">
              DICT Region 10<br />
              <span className="text-[#FCD116]">KMS Portal</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Centralized access to programs, projects, and performance dashboards of the
              Department of Information and Communications Technology – Northern Mindanao.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#projects"
                className="px-6 py-3 bg-[#FCD116] text-[#0038A8] rounded-full font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2">
                View Projects <ArrowRight size={16} />
              </a>
              <Link to="/about"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full font-medium transition-colors">
                About Us
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Accent strip */}
        <div className="h-2 bg-linear-to-r from-[#CE1126] via-[#FCD116] to-[#CE1126]" />
      </section>

      {/* Stats bar */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { label: 'Active Projects', value: '8' },
            { label: 'Dashboards', value: '8' },
            { label: 'Region', value: '10' },
            { label: 'Province Coverage', value: '7' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-black text-[#0038A8] dark:text-blue-400">{s.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image Carousel */}
      <Carousel />

      {/* Projects Grid */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-900 dark:text-white">Programs & Projects</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Click any project to view its live dashboard</p>
          <div className="mt-3 h-1 w-16 bg-[#FCD116] rounded mx-auto" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.path} variants={card}>
              <Link
                to={project.path}
                className={`group h-full block border rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${project.color}`}
              >
                {/* Logo banner */}
                <div className={`flex items-center justify-center h-28 ${project.logoBg}`}>
                  <img
                    src={project.logo}
                    alt={project.title}
                    className="max-h-20 max-w-[85%] object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-base leading-tight mb-1">{project.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed mb-3">{project.description}</p>
                  <div className="flex items-center gap-1 text-xs font-semibold">
                    View Dashboard <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to action */}
      <section className="bg-[#CE1126] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Stay Informed with DICT R10</h2>
          <p className="text-white/80 mb-6 text-sm">Access real-time data, maps, and administrative files from one portal.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/maps" className="px-5 py-2.5 bg-white text-[#CE1126] rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
              View Maps
            </Link>
            <Link to="/afd" className="px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-full font-medium text-sm transition-colors">
              AFD Documents
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
