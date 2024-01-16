import React from "react";
import { motion } from "framer-motion";
import './Heading.css'
export default function Heading(props){
    // const dir = props.direction=='right' ? 
    return (
        <div className="parent-head">
            <motion.div  initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                hidden: { opacity: 0, x: -200 },
                
                visible: { opacity: 1, x: 0, transition: { delay: 0.3,  } },
                }}>
                {/* <h2 className={`${props.direction} headings` }>{props.heading}</h2> */}
                <div className={`${props.direction} headings` }>{props.heading}</div>
            </motion.div>
            <motion.div initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={  {
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0, transition: { delay: 0.7, ease: "easeInOut" } },
                  }} className="headings-border">
            </motion.div>
        </div>
    );
}