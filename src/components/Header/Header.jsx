import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import hackgenx_logo_t from '../../assets/hackgenx_logo_t.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative overflow-hidden">
      {/* Navbar */}
      <nav className="p-4 text-white flex justify-between items-center">

        <Link to={'/'}> 
        <h1
          className="text-2xl font-bold text-white flex items-center gap-2"
          style={{ fontFamily: "Horizon" }}
        >
          {/* Hackgen */}
          <img
  src= {hackgenx_logo_t}
  alt="InnovateX"
  className="h-16 w-auto
  "
 />

        </h1>
        </Link>
        
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </div>
        <ul className="hidden md:flex gap-8 font-semibold">
          <Link to="/#why-participate" className="text-gray-300 hover:text-white">
            Why Participate
          </Link>
          <Link to="/#structure" className="text-gray-300 hover:text-white">
            Structure
          </Link>
          <Link to="/#timeline" className="text-gray-300 hover:text-white">
            Timeline
          </Link>
          <Link to={"/#prizes"} className="text-gray-300 hover:text-white">
            Prizes
          </Link>
          <Link to="/#contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
          <Link to="/faq" className="text-gray-300 hover:text-white">
            FAQ
          </Link>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col text-white p-4 gap-4">
          <Link href="#why-participate" className="text-gray-300 hover:text-white">
            Why Participate
          </Link>
          <Link href="/#structure" className="text-gray-300 hover:text-white">
            Structure
          </Link>
          <Link href="/#timeline" className="text-gray-300 hover:text-white">
            Timeline
          </Link>
          <Link href="/#prizes" className="text-gray-300 hover:text-white">
            Prizes
          </Link>
          <Link href="/#contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
          <Link to="/faq" className="text-gray-300 hover:text-white">
            FAQ
          </Link>
        </ul>
      )}
    </header>
  );
}
