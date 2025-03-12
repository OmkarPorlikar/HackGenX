import React from 'react'
import { ArrowRight } from "lucide-react";

function Guidelines() {
  return (
    <div className="py-20 px-6 bg-slate-900 flex">
      <div className="max-w-7xl w-full">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Guidelines
        </h2>

        {/* Screening Round */}
        <div className="bg-gray-800 p-8 rounded-lg space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              Screening Round Submission (Online)
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <ArrowRight className="text-purple-500 w-5 h-5 flex-shrink-0" />
                <span><strong>Deadline:</strong> 25th March 2025, 10 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="text-purple-500 w-5 h-5 flex-shrink-0" />
                <span><strong>File Format:</strong> PPT</span>
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="text-purple-500 w-5 h-5 flex-shrink-0" />
                <span><strong>Required Content:</strong></span>
              </li>

              <li className="flex items-center gap-3 pl-7">
                <ArrowRight className="text-purple-500 w-4 h-4 flex-shrink-0" />
                Problem Statement Chosen – Clearly mention the selected problem
              </li>
              <li className="flex items-center gap-3 pl-7">
                <ArrowRight className="text-purple-500 w-4 h-4 flex-shrink-0" />
                Solution Overview – Brief description of your approach
              </li>
              <li className="flex items-center gap-3 pl-7">
                <ArrowRight className="text-purple-500 w-4 h-4 flex-shrink-0" />
                Technology Stack – Tools, programming languages, and frameworks used
              </li>
              <li className="flex items-center gap-3 pl-7">
                <ArrowRight className="text-purple-500 w-4 h-4 flex-shrink-0" />
                Implementation Plan – Step-by-step execution strategy
              </li>
              <li className="flex items-center gap-3 pl-7">
                <ArrowRight className="text-purple-500 w-4 h-4 flex-shrink-0" />
                Expected Impact & Feasibility – How your solution solves the problem effectively
              </li>

              <li className="flex items-center gap-3 mt-3">
                <ArrowRight className="text-purple-500 w-5 h-5 flex-shrink-0" />
                <strong>Shortlisted Teams Announcement:</strong> 26th March 2025
              </li>
              <li className="flex items-center gap-3 mt-3">
                <ArrowRight className="text-purple-500 w-5 h-5 flex-shrink-0" />
                <strong>Note</strong> Shortlisted teams have to pay &#8377;300 to confirm their spot
                up till 28 March
              </li>
            </ul>
          </div>
        </div>

        {/* Final Hackathon Submission */}
        <div className="bg-gray-800 p-8 rounded-lg space-y-6 mt-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              Final Hackathon Submission (Offline)
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <ArrowRight className="text-purple-500 w-5 h-5 flex-shrink-0" />
                <span><strong>Deadline:</strong> 3rd April 2025, 12:00 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="text-purple-500 w-5 h-5 flex-shrink-0" />
                <span><strong>Required Deliverables:</strong></span>
              </li>

              <li className="flex items-center gap-3 pl-7">
                <ArrowRight className="text-purple-500 w-4 h-4 flex-shrink-0" />
                Project Code – GitHub or Google Drive link with all source files
              </li>
              <li className="flex items-center gap-3 pl-7">
                <ArrowRight className="text-purple-500 w-4 h-4 flex-shrink-0" />
                Prototype Demo Video – A short walkthrough of your working prototype (optional but recommended)
              </li>
              <li className="flex items-center gap-3 pl-7">
                <ArrowRight className="text-purple-500 w-4 h-4 flex-shrink-0" />
                Presentation Slides (PPT) – Summary of your project, covering problem, solution, and implementation
              </li>
              <li className="flex items-center gap-3 pl-7">
                <ArrowRight className="text-purple-500 w-4 h-4 flex-shrink-0" />
                Project Documentation (PDF) – Detailed write-up explaining the project, features, and functionality
              </li>

              <li className="flex items-center gap-3 mt-3">
                <ArrowRight className="text-purple-500 w-5 h-5 flex-shrink-0" />
                <strong>Note:</strong> Late submissions will not be accepted. Ensure all files are properly named and uploaded before the deadline.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guidelines
