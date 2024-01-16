import React, { useEffect, useRef } from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import GppGoodIcon from '@mui/icons-material/GppGood';
import VerifiedIcon from '@mui/icons-material/Verified';
import LanguageIcon from '@mui/icons-material/Language';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import "./Info.css"

const Info = () => {

  return (
    <div className="info-container" >
        <div className="info-wrapper">
            <div className="info-outer">
                <div className="info-card" style={{'--delay': -1}}>
                    <div className="info-content">
                        <VerifiedIcon className='info-icon' />
                        <div className="details">
                           Total more than 1500 problems solved across all platforms
                        </div>
                    </div>
                </div>
                <div className="info-card" style={{'--delay': 0}}>
                    <div className="info-content">
                        <LanguageIcon className='info-icon' />
                        <div className="details">
                           Primary Coding Language: C++
                        </div>
                    </div>
                </div>
                <div className="info-card" style={{'--delay': 1}}>
                    <div className="info-content">
                        <GppGoodIcon className='info-icon' />
                        <div className="details">
                            More than 1000 problems solved on Leetcode
                        </div>
                    </div>
                </div>
                <div className="info-card" style={{'--delay': 2}}>
                    <div className="info-content">
                        <StarPurple500Icon className='info-icon'/>
                        <div className="details">
                            Highest LeetCode Rating: 2080
                        </div>
                    </div>
                </div>
                <div className="info-card" style={{'--delay': 2}}>
                    <div className="info-content">
                        <AddTaskIcon className='info-icon'/>
                        <div className="details">
                            60+ Contests attended
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Info;
