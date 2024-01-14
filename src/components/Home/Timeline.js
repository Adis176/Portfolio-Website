import "./Timeline.css"
import React from "react";
// import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
{/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"> */}
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
                               
                                <p>Milestone Admin Dashboard contains C3 graphs, flot graphs, data tables, calendar, drag &amp; drop and ion slider.</p>
                                <div className="">
                                    <span className="badge badge-light">#ReactJS</span>
                                    <span className="badge badge-light">#NextJS</span>
                                    <span className="badge badge-light">#SCSS</span>
                                    <span className="badge badge-light">#AWS S3</span>
                                    <span className="badge badge-light">#NextJS</span>
                                </div>
                            </div>
                            </FadeInWhenVisible>   
                        </div>
     

                   
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
                               
                                <p>Milestone Admin Dashboard contains C3 graphs, flot graphs, data tables, calendar, drag &amp; drop and ion slider.</p>
                                <div className="">
                                    <span className="badge badge-light">#ReactJS</span>
                                    <span className="badge badge-light">#NextJS</span>
                                    <span className="badge badge-light">#SCSS</span>
                                    <span className="badge badge-light">#AWS S3</span>
                                    <span className="badge badge-light">#NextJS</span>
                                </div>
                            </div>
                            </FadeInWhenVisible>                       
                        </div>        
                
                </div>
            </div>
        </div>
        );
}