import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center relative z-20 gap-4 md:gap-0">
      {/* Status Badge */}
      <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm w-fit">
        <div className="w-3 h-3 bg-[#10B981] rounded-full"></div>
        <span className="text-sm font-semibold text-[#1A1F2B]">Available for New Project</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-gray-800">
        <a href="#hero" className="text-slate-100 hover:text-cyan-500 transition-colors">About me</a>
        <a href="#work" className="text-slate-100 hover:text-cyan-500 transition-colors">Work</a>
        <a href="#technologies" className="text-slate-100 hover:text-cyan-500 transition-colors">Technologies</a>
      </div>

      {/* CTA Button */}
      <a href="#contact">
      <button className="flex items-center gap-2 bg-[#1A1F2B] text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-black transition-colors shadow-lg shadow-black/10">
        Let's Talk
        <ArrowUpRight size={18} />
      </button>
      </a>
    </nav>
  );
};

export default Navbar;