import React from "react";

import "./pagestyling/Applicantinfo.css"
import Header from './components/Header';
import Applicant_datacard from "./components/Applicant_datacard";

//variables
let applicants_list

applicants_list = ["applicant1","applicant2","applicant3"]



export default function Applicantinfo() {
  
  return (
    <>
      <Header/>
      <div className="main_flex">
        
        <div className="applicant_list_flex">
        
        {
          applicants_list.map((i) => (
              <button key={i} className="applicant_title">{i}</button>
          ))
        }
        </div>
        <div class="verticalLine">
        </div>
        <Applicant_datacard 
        applicant_name={"applicant1"}
        pastexperience={["google","facebook ","your mom"]} 
        ugdegree={"Computer Science Btech"} 
        ugcollege={"iiit bangalore"}
        pgdegree={"Mtech computer science"}
        pgcollege={"iit bombay"}/>
      </div>
      
      
      
    </>
      
  );
}