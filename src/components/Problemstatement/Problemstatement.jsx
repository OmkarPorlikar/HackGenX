import React from 'react';

/**
 * @typedef {Object} ProblemStatement
 * @property {number} id
 * @property {string} title
 * @property {string[]} objectives
 * @property {string[]} challenges
 * @property {string[]} outcomes
 */

/** @type {ProblemStatement[]} */
const problemStatements = [
  {
    id: 1,
    title: "Smart Warehouse Space Optimization",
    objectives: [
      "Develop AI algorithms for optimal storage allocation",
      "Implement real-time inventory tracking system",
      "Create automated space management solutions"
    ],
    challenges: [
      "Complex spatial optimization requirements",
      "Real-time data processing and analysis",
      "Integration with existing warehouse systems"
    ],
    outcomes: [
      "30% improvement in space utilization",
      "Reduced operational costs",
      "Enhanced inventory management efficiency"
    ]
  },
  {
    id: 2,
    title: "Automated Asset Lifecycle Management",
    objectives: [
      "Create comprehensive asset tracking system",
      "Implement predictive maintenance",
      "Develop disposal optimization algorithms"
    ],
    challenges: [
      "Multiple asset type handling",
      "Complex lifecycle tracking",
      "Integration with existing systems"
    ],
    outcomes: [
      "Improved asset utilization",
      "Reduced maintenance costs",
      "Optimized asset lifecycle management"
    ]
  },
  {
    id: 3,
    title: "Smart Budget Allocation System",
    objectives: [
      "Automate data-driven budget allocation for public projects"
    ],
    challenges: [
      "Balancing funding across multiple sectors",
      "Integrating real-time data for accurate allocations",
      "Ensuring transparency in budget decisions"
    ],
    outcomes: [
      "Optimized resource allocation for public projects",
      "Reduced financial waste and mismanagement",
      "Enhanced decision-making through data insights"
    ]
  },
  {
    id: 4,
    title: "Intelligent Ore Quality Prediction",
    objectives: [
      "Develop ML models for quality prediction",
      "Implement sensor data integration",
      "Create real-time analysis system"
    ],
    challenges: [
      "Complex data patterns",
      "Sensor data reliability",
      "Real-time processing requirements"
    ],
    outcomes: [
      "Improved extraction efficiency",
      "Reduced waste",
      "Optimized processing decisions"
    ]
  },
  {
    id: 5,
    title: "Smart Building Energy Optimization",
    objectives: [
      "Implement energy monitoring system",
      "Develop predictive analytics",
      "Create automated control systems"
    ],
    challenges: [
      "Complex building systems",
      "Real-time data processing",
      "Multiple system integration"
    ],
    outcomes: [
      "Reduced energy consumption",
      "Lower operational costs",
      "Improved building efficiency"
    ]
  },
  {
    id: 6,
    title: "Deforestation & Wildlife Tracking using AI",
    objectives: [
      "Implement satellite image analysis",
      "Develop wildlife movement tracking",
      "Create early warning system"
    ],
    challenges: [
      "Large-scale data processing",
      "Complex pattern recognition",
      "Real-time monitoring requirements"
    ],
    outcomes: [
      "Improved conservation efforts",
      "Better wildlife protection",
      "Reduced illegal activities"
    ]
  },
  {
    id: 7,
    title: "Automated Spill & Garbage Detection",
    objectives: [
      "Implement computer vision system",
      "Develop sensor network",
      "Create alert mechanism"
    ],
    challenges: [
      "Environmental variations",
      "Real-time detection",
      "False positive reduction"
    ],
    outcomes: [
      "Faster incident response",
      "Improved environmental protection",
      "Reduced cleanup costs"
    ]
  }
];


// const problemStatements = [
//   {
//     id: 1,
//     title: "Smart Warehouse Space Optimization",
//     objectives: [
//       "Develop AI algorithms for optimal storage allocation",
//       "Implement real-time inventory tracking system",
//       "Create automated space management solutions"
//     ],
//     challenges: [
//       "Complex spatial optimization requirements",
//       "Real-time data processing and analysis",
//       "Integration with existing warehouse systems"
//     ],
//     outcomes: [
//       "30% improvement in space utilization",
//       "Reduced operational costs",
//       "Enhanced inventory management efficiency"
//     ]
//   },
//   {
//     id: 2,
//     title: "Automated Asset Lifecycle Management",
//     objectives: [
//       "Create comprehensive asset tracking system",
//       "Implement predictive maintenance",
//       "Develop disposal optimization algorithms"
//     ],
//     challenges: [
//       "Multiple asset type handling",
//       "Complex lifecycle tracking",
//       "Integration with existing systems"
//     ],
//     outcomes: [
//       "Improved asset utilization",
//       "Reduced maintenance costs",
//       "Optimized asset lifecycle management"
//     ]
//   },
//   {
//     id: 3,
//     title: "AI-Based Public Grievance Redressal System",
//     objectives: [
//       "Implement NLP for grievance classification",
//       "Develop automated response system",
//       "Create priority-based routing"
//     ],
//     challenges: [
//       "Multiple language support",
//       "Complex grievance patterns",
//       "Real-time response generation"
//     ],
//     outcomes: [
//       "Faster grievance resolution",
//       "Improved citizen satisfaction",
//       "Reduced manual processing"
//     ]
//   },
//   {
//     id: 4,
//     title: "Intelligent Ore Quality Prediction",
//     objectives: [
//       "Develop ML models for quality prediction",
//       "Implement sensor data integration",
//       "Create real-time analysis system"
//     ],
//     challenges: [
//       "Complex data patterns",
//       "Sensor data reliability",
//       "Real-time processing requirements"
//     ],
//     outcomes: [
//       "Improved extraction efficiency",
//       "Reduced waste",
//       "Optimized processing decisions"
//     ]
//   },
//   {
//     id: 5,
//     title: "Smart Building Energy Optimization",
//     objectives: [
//       "Implement energy monitoring system",
//       "Develop predictive analytics",
//       "Create automated control systems"
//     ],
//     challenges: [
//       "Complex building systems",
//       "Real-time data processing",
//       "Multiple system integration"
//     ],
//     outcomes: [
//       "Reduced energy consumption",
//       "Lower operational costs",
//       "Improved building efficiency"
//     ]
//   },
//   {
//     id: 6,
//     title: "Smart Budget Allocation System",
//     objectives: [
//       "Automate data-driven budget allocation for public projects"
//     ],
//     challenges: [
//       "Balancing funding across multiple sectors",
//       "Integrating real-time data for accurate allocations",
//       "Ensuring transparency in budget decisions"
//     ],
//     outcomes: [
//       "Optimized resource allocation for public projects",
//       "Reduced financial waste and mismanagement",
//       "Enhanced decision-making through data insights"
//     ]
//   },
//   {
//     id: 7,
//     title: "Real-Time Crowd Monitoring System",
//     objectives: [
//       "Create a system to track and monitor large crowds in public places for safety and security"
//     ],
//     challenges: [
//       "Tracking individuals in dense crowds while preserving privacy",
//       "Ensuring real-time monitoring and alerting without data breaches",
//       "Managing high-volume data from multiple sources"
//     ],
//     outcomes: [
//       "Enhanced public safety through real-time crowd insights",
//       "Faster incident detection and response",
//       "Scalable monitoring for large events and urban areas"
//     ]
//   }
// ];



function App() {
  return (
    <div className="min-h-screen bg-[#1e293b]">
      <header className="bg-[#1e293b] shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#25d8de] text-center pb-4 border-b border-[#25d8de]">Problem Statements</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {problemStatements.map((problem) => (
              <div key={problem.id} className="space-y-4">
                <div className="bg-[#0f172a] rounded-lg shadow-xl overflow-hidden">
                  <div className="p-4 bg-[#1e293b] flex items-center">
                    <span className="text-[#25d8de] font-bold text-2xl mr-4">{problem.id}</span>
                    <h2 className="text-2xl font-bold text-[#25d8de]">{problem.title}</h2>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-[#25d8de] mb-3">Objectives</h3>
                      <ul className="list-disc list-inside text-[#e2e8f0] space-y-2">
                        {problem.objectives.map((objective, index) => (
                          <li key={index}>{objective}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#25d8de] mb-3">Key Challenges</h3>
                      <ul className="list-disc list-inside text-[#e2e8f0] space-y-2">
                        {problem.challenges.map((challenge, index) => (
                          <li key={index}>{challenge}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#25d8de] mb-3">Expected Outcomes</h3>
                      <ul className="list-disc list-inside text-[#e2e8f0] space-y-2">
                        {problem.outcomes.map((outcome, index) => (
                          <li key={index}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;