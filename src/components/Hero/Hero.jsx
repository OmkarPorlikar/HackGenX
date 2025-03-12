import React from "react";
import {
  Calendar,
  Trophy,
  Users,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Code,
} from "lucide-react";
import { Link } from "react-router-dom";
import '../../index.css'

import sipnaLogo from '../../assets/sipna_logo.png'

export default function Hero() {
  const registrationOpen = true; // This could be controlled by your backend
  const registrationEndDate = "March 20, 2025";
<style>

@media screen and (max-width)


</style>

  return (
    <section className="pt-8 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* <div>  </div> */}
        <div className="text-purple-500 text-4xl font-semibold mb-3 flex items-center justify-center gap-5 hero-logo-text">
  <img src={sipnaLogo} alt="Sipna logo" height="100px" width="100px" className="mt-[1rem]" />
  <p className="hero-title"> 
    SIPNA COLLEGE OF ENGINEERING AND <br /> TECHNOLOGY, AMRAVATI
  </p>
</div>

        <div className="text-white text-2xl">In association with</div>
        <div className="text-purple-500 text-4xl font-semibold mt-3 mb-3 hero-title">
  PUGARCH TECHNOLOGY Pvt. Ltd.
</div>
        <div className="text-white text-3xl font-semibold mb-3">
          NATIONAL LEVEL HACKATHON
        </div>
        <div className="text-purple-500 text-3xl font-semibold mb-3">
          2<sup>nd</sup> & 3<sup>rd</sup> APRIL, 2025 GRAND FINALE
        </div>
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
            registrationOpen
              ? "bg-green-500/10 text-green-400"
              : "bg-red-500/10 text-red-400"
          } mb-6`}
        >
          {registrationOpen ? (
            <CheckCircle size={20} />
          ) : (
            <AlertCircle size={20} />
          )}
          Registration {registrationOpen ? "Open" : "Closed"}
        </div>
        <h2 className="text-6xl font-bold text-white mb-6">
          HackGenX <span className="text-purple-500">2025</span>
        </h2>
        <div className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          <p>The Ultimate Arena for Innovators</p>
          <p>24 hours of coding, creating, and competing for amazing prizes.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-lg w-full sm:w-64 text-center">
            <Users className="text-purple-500 w-8 h-8 mb-3 mx-auto" />
            <h3 className="text-white font-semibold">Team Size</h3>
            <p className="text-gray-400">1-4 Members</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg w-full sm:w-64 text-center">
            <Calendar className="text-purple-500 w-8 h-8 mb-3 mx-auto" />
            <h3 className="text-white font-semibold">Registration Ends</h3>
            <p className="text-gray-400">{registrationEndDate}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg w-full sm:w-64 text-center">
            <Trophy className="text-purple-500 w-8 h-8 mb-3 mx-auto" />
            <h3 className="text-white font-semibold">Prize Pool</h3>
            <p className="text-gray-400">1,50,000+</p>
          </div>
        </div>

        <div className="flex flex-row flex-nowrap justify-center gap-4">
          <Link to="/registration">
            <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg px-4 py-3 inline-flex items-center justify-center gap-2 whitespace-nowrap">
              Register Now
            </button>
          </Link>

          <Link
            to="/problemstatement"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Problem Statements
          </Link>
        </div>
      </div>
    </section>
  );
}
