import React from 'react'
import { GitHub } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <a 
            href="https://github.com/jamieleegordon" 
            target="_blank" 
            rel="noopener noreferrer">
            <GitHub />
          </a>
          <a 
            href="https://www.linkedin.com/in/jamie-lee-gordon/" 
            target="_blank" 
            rel="noopener noreferrer">
            <LinkedIn />
          </a>
        </div>
        <p> &copy; 2023 jamieleegordon.com</p>
    </div>
  )
}

export default Footer