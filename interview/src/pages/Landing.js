import React from "react";
import {Link} from "react-router-dom"
import Meetings from "./Meetings";
import testimage from './imgsources/abc.jpeg';
import Header from './components/Header';
import Jobcard from "./components/Jobcard";
import "./pagestyling/Landing.css"
export default function Landing() {

  
  const styl = 
    { 
      margin: "0",
      padding: "0",
      boxsizing: "border-box",
      position: "relative",
      display: "block",
      marginleft: "auto",
      marginright: "auto",
      margintop: "10px",
      marginbottom: "10px",
      padding: "10px",
      paddingtop: "20pt",
      width: "1113px",
      
      
      background: "#fdf9f9",
      borderradius: "30px",
      boxshadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
  
  }
  return (
    <>
      
      <Header/>
      
      <div className = "jobcard" >
        <Jobcard  job_role = {"Software Engineer"} skills_list = {["Java","C++","JavaScript","C","#C"]} total_openings = {10} total_applicants = {52} />
        
      </div>  
      <div className = "jobcard">
        <Jobcard  job_role = {"Web Developer"} skills_list = {["JavaScript","MongoDB","Express","NodeJS","React"]} total_openings = {15} total_applicants = {32} />
      </div>

    </>
  );
}
