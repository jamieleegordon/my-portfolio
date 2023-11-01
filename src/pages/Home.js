import React from 'react'
import { LinkedIn } from '@mui/icons-material';
import { Email } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import Me from '../assets/me.png';
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <img src={Me} alt = 'me' />
            <h2>Hey, I'm Jamie-Lee <span>👋🏻</span></h2>
            <div className='prompt'>
                <p>
                    Junior Software Developer
                </p>
                <a 
                    href="https://www.linkedin.com/in/jamie-lee-gordon/" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <LinkedIn />
                </a>
                <a 
                    href="mailto:gordonjamie123@yahoo.co.uk">
                    <Email />
                </a>
                <a 
                    href="https://github.com/jamieleegordon" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <GitHub />
                </a>
            </div>
        </div>
        <div className='skills'>
            <h1>📚 Skills 💻</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Programming Languages</h2>
                    <span>C++, Java, JavaScript, Python, HTML, CSS, ReactJS, SQL </span>
                </li>
                <li className='item'>
                    <h2>Tools and Environments</h2>
                    <span>Visual Studio, Visual Studio Code, Intellij IDEA, Visual Paradigm, Net Beans, Python IDLE </span>
                </li>
                <li className='item'>
                    <h2>Version Control</h2>
                    <span>Git, GitHub</span>
                </li>
                <li className='item'>
                    <h2>Operating Systems</h2>
                    <span>Windows, Linux</span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home

