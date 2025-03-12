import React from 'react';

import Header from '../../components/Header/Header';
import { Eligibility} from '../../components/Eligibility/Eligibility';
import Faq from '../../components/FAQ/Faq';
import Guidline from '../../components/Guidlines/Guidline';
import PrizePool from '../../components/PrizePool/PrizePool';
import Sponsors from '../../components/Sponsors/Sponsors';
import Sturcture from '../../components/Structure/Sturcture';
import Whyparticipate from '../../components/Why participate/Whyparticipate';
import FooterContact from "../../components/FooterContacts/FooterContact";
import Timeline from "../../components/Timeline/Timeline";
import Hero from '../../components/Hero/Hero';
function Home() {

  const registrationOpen = true; // This could be controlled by your backend
  const registrationEndDate = "March 20, 2025";
  const sponsors = [
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=64&fit=crop",
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=128&h=64&fit=crop",
    "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=128&h=64&fit=crop",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=128&h=64&fit=crop",
    "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=128&h=64&fit=crop", 
  ];

  
const Loader = () => {
  return (
    <Loader
      type="Puff"
      color="#0f223f"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
};

  const timeline = [
    {
      date: "March 15, 2025",
      time: "10:00 AM",
      event: "Opening Ceremony",
      description: "Welcome address and track announcements"
    },
    {
      date: "March 15, 2025",
      time: "12:00 PM",
      event: "Team Formation & Ideation",
      description: "Form your teams and start brainstorming"
    },
    {
      date: "March 16, 2025",
      time: "10:00 AM",
      event: "Mentorship Sessions",
      description: "Get guidance from industry experts"
    },
    {
      date: "March 17, 2025",
      time: "12:00 PM",
      event: "Project Submission",
      description: "Submit your projects for evaluation"
    },
    {
      date: "March 17, 2025",
      time: "6:00 PM",
      event: "Closing Ceremony",
      description: "Winners announcement and prize distribution"
    }
  ];

  const faqs = [
    {
      question: "What is the team size limit?",
      answer: "Teams can have 2-4 members. Solo participation is not allowed."
    },
    {
      question: "Can I participate remotely?",
      answer: "No, this is an in-person hackathon only."
    },
    {
      question: "What should I bring?",
      answer: "Laptop, charger, and student ID card are mandatory."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation is completely free!"
    }
  ];


    return ( 
        
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">

  {/* <p> Inside Home Page 🏠</p> */}

<Hero/>
<Sponsors/>
<Whyparticipate/>
<Sturcture/>
<Eligibility />
<Timeline/>
{/* <Guidline/> */}
{/* <Faq/> */}
<PrizePool/>

</div>        
        
 );


}
export default Home;