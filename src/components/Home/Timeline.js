import "./Timeline.css"
import React from "react";
// import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
function FadeInWhenVisible({ children }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }}
      >
        {children}
      </motion.div>
    );
  }
export default function Timeline(){
        return(
        <div className="container bootdey">
            <div className="timeline-card-body">
                <div className="timeline">
                    <div className="timeline-row">
                        <FadeInWhenVisible>
                            <div className="timeline-time">
                                January 2023 - July 2023
                            </div>
        
                            <div className="timeline-content">
                                <div className="timeline-title company">
                                    <BusinessIcon className="timeline-icon timeline-reg"/>
                                    Cling Multi-Solutions
                                </div>
                                <div className="timeline-title ">
                                    <WorkspacePremiumIcon className="timeline-reg"/>
                                    SDE Intern 
                                </div>
                                <div className="timeline-title ">
                                    <LocationOnIcon className="timeline-reg"/>
                                    Pune, Maharashtra, India
                                </div>
                            
                                <p>Designed a responsive website for Yogyata company with dark mode, using NextJS.
Developed an admin portal for company publicity and broadcasting its courses,
along with API Integration, using ReactJS framework. Utilized AWS platform for efficient resource handling</p>
                                <div className="">
                                    <span className="badge badge-light">#ReactJS</span>
                                    <span className="badge badge-light">#NextJS</span>
                                    <span className="badge badge-light">#SCSS</span>
                                    <span className="badge badge-light">#AWS S3</span>
                                    <span className="badge badge-light">#NodeJS</span>
                                    <span className="badge badge-light">#REST API</span>
                                </div>
                            </div>
                        </FadeInWhenVisible>   
                    </div>
    

                
                    <div className="timeline-row">
                        <FadeInWhenVisible>
                            <div className="timeline-time">
                                May 2022 - July 2022
                            </div>
        
                            <div className="timeline-content">
                                <div className="timeline-title company">
                                    <BusinessIcon className="timeline-icon timeline-reg"/>
                                    eInfoChips
                                </div>
                                <div className="timeline-title ">
                                    <WorkspacePremiumIcon className="timeline-reg"/>
                                    Summer Intern 
                                </div>
                                <div className="timeline-title ">
                                    <LocationOnIcon className="timeline-reg"/>
                                    Remote
                                </div>
                            
                                <p> Worked on SEO Optimization to achieve higher search rank by employing Django & ReactJS.
• Worked on an analytic dashboard that keeps track of search words for future utilization to increase traffic</p>
                                <div className="">
                                    <span className="badge badge-light">#ReactJS</span>
                                    <span className="badge badge-light">#JavaScript</span>
                                    <span className="badge badge-light">#Python</span>
                                    <span className="badge badge-light">#Django</span>
                                </div>
                            </div>
                        </FadeInWhenVisible>                       
                    </div>        
                </div>
            </div>
        </div>
        );
}