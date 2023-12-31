import React from 'react'
import TopView from './src/components/topView/TopView'
import Programs from "./src/components/our-programs_div/Programs";



const Work_with_Us = () => {


       const program_headings = [
              {
                main_head:"Full Time Job Roles",
                card_info:[{head:"Blockchain Developer"},{head:"Phyton Developer"},{head:"MERN stack Developer"}]
              }
              ,
              {
                main_head:"Summer Internships",
                card_info:[{head:"fullstack Developer"},{head:"MEAN Developer"},{head:"JAVA Developer"}]
              }
              ,
              {
                main_head:"Offline Internships",
                card_info:[{head:"Data Analyst"},{head:"HR Requriter"},{head:"C++ Developer"}]
              }
              ,
              {
                main_head: "Online Internships",
                card_info:[{head:"Phyton Certification"},{head:"Java Certification"},{head:"UI/UX Developer"}]
              }
              
            ];


  return (
    <div>
       <TopView/>
       <Programs heading={program_headings[0]} />
      <Programs heading={program_headings[1]} />
      <Programs heading={program_headings[2]} />
      <Programs heading={program_headings[3]} />
      
    </div>
  )
}

export default Work_with_Us
