import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { School, Work } from '@mui/icons-material';
import '../styles/Experience.css';

function Experience() {
    return (
      <div className="experience">
        <VerticalTimeline lineColor="white">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2014 - 2019"
            dateClassName="custom-date-color"
            iconStyle={{ background: "red", color: "#fff" }}
            icon={<School />}
          >
            <h3 className="vertical-timeline-element-title">
              All Saints Catholic School & Technology College
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              London, UK
            </h4>
            <p> 
              GCSE's: <br />
              Mathematics (7) <br />
              English Literature (9) <br />
              English Language (7) <br />
              Computer Science (6) <br />
              Business Studies (7) <br />
              Combined Science (77) <br />
              Art and Design (6) <br />
              Religious Education (7) <br /> 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019 - 2021"
            dateClassName="custom-date-color"
            iconStyle={{ background: "red", color: "#fff" }}
            icon={<School />}
          >
            <h3 className="vertical-timeline-element-title">
            All Saints Catholic School & Technology College and Robert Clack Sixth Form
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              London, UK
            </h4>
            <p> 
              A Level Computer Science (A) <br />
              A Level Business Studies (A*) <br />
              A Level Art and Design (C) <br />
              AQA Level 3 Core Maths (B) 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021 - present"
            dateClassName="custom-date-color"
            iconStyle={{ background: "red", color: "#fff" }}
            icon={<School />}
          >
            <h3 className="vertical-timeline-element-title">
              City, University of London - BSc Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              London, UK
            </h4>
            <p>Graduation Year: 2025</p>
            <p>
              SECOND YEAR <br />
              - Programming in C++ (98%) <br />
              - Data structures and algorithms (92%) <br />
              - Language Processors (90%) <br />
              - Professional development in IT (89%) <br />
              - Team Project (85%) <br />
              - Object-orientated programming and analysis (82%) <br />
              <br />
              FIRST YEAR <br />
              - Introduction to algorithms (90%) <br />
              - Mathematics for computing (88%) <br />
              - Systems architecture (81%) <br />
              - Programming in Java (80%) <br />
              - Databases (75%)
          </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - present"
            dateClassName="custom-date-color"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<Work />}
          >
            <h3 className="vertical-timeline-element-title">
              NBCUniversal - Media Software Engineer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              London, UK
            </h4>
            <p>
              The role and activities: <br/>
              - Monitoring and recording automation regression test results. <br />
              - Taking on tasks within Azure Logic Apps such as tracing errors. <br />
              - API Documentation - collecting data such as endpoints, parameters and sample requests and responses. <br />
              - Going through the back-end to collect information to be documented for the team. <br />
              - Workflow documentation - creating documentation on the interfaces and workflows used between NBCUniversal internal systems. <br />
              - Daily scrum meetings. <br />
              - Weekly presentations at beginning of internship regarding different areas of the business such as ad sales, playout & distribution and programming & aquisitions etc. <br />
              - Font-end-development - learning the fundamentals of web development including JavaScript, CSS and HTML and using the ReactJS library. <br />
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
  

export default Experience