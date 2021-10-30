import { get } from "mongoose";
import React from "react";
import "./pagestyling/Meetings.css"
import {Link} from "react-router-dom"
import { useState, useEffect } from 'react';
import Header from "./components/Header"
let meeting_list =[["meeting 1","interview 1",1],["meeting 2","interview 2",2],["meeting 3","interview 3",3],["meeting 4","interview 4",4],["meeting 5","interview 5",5],["meeting 6","interview 6",6]]
export default function Meetings() {
  const [nameme , setnameme] = useState("")
  const getmeet = () => {
    // console.log("Works");
    fetch("http://localhost:4000/Meetings")
      .then((response) => response.json())
      .then((data) => {
        //nameme= data.
        //console.log("y u no work");
        setnameme(data.name);
        // <Link to = "/Meetings"> <Meetings name = {nameme} /> </Link>
      });
  };
  useEffect (()=>
  {
    getmeet();
  })
  getmeet();
  //console.log(nameme);
     async function getvid ()
    {
      fetch('http://localhost:5001/')
      .then(response => response.json())
      .then(data => console.log(data));
    }
    const theUrl = 'http://localhost:5001/'
    function httpGetAsync(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
          {console.log("ok")
            window.location.href = "https://localhost:5001/1";
          }
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
const url = "http://localhost:5001/"
function url_redirect(url){
  var X = setTimeout(function(){
      window.location.replace(url);
      return true;
  },300);

  if( window.location = url ){
      clearTimeout(X);
      return true;
  } else {
      if( window.location.href = url ){
          clearTimeout(X);
          return true;
      }else{
          clearTimeout(X);
          window.location.replace(url);
          return true;
      }
  }
  return false;
};
    // console.log(nameme)
  const sty = {
    boxsizing: "border-box",
    padding: "2vh",
    margin: "20px 20px 20px 20px",
    borderradius: "10px",
  };
  const ty = {
      display : "flex",
      justifyContent : "Space-between",
      boxsizing : "border-box",
      marginLeft : "300px",
      marginRight :"300px"
  }
//   console.log(nameme)
  return (
    <>
    {/* <Header/> */}
      {/* <div style={sty} className="meeting_card_flex">
        
          {
            meeting_list.map((i) =>{
            <div className="card">
            <div className="card-header">Meeting 1: </div>
              <div className="card-body">
                <h5 className="card-title">{nameme}</h5>
                <div style= {ty}>
                    <Link to = "/Meetings/Get1"><button className="btn btn-primary">Get data</button></Link>
                    <button className="btn btn-primary" onClick = {()=>url_redirect(url)}>start call</button>
                    </div>
              </div>
            </div>
          })
              
        }
      </div> */}
      <div className="meeting_card_flex" div style={sty}>
      {
        meeting_list.map((i) => (
            
            <div className="card" >
              <div key={i[2]} className="card-header">{i[0]}</div>
              <div className="card-body">
                <h5 key={i[2]} className="card-title">{i[1]}</h5>
                
                <div style= {ty}>
                    <Link to = {() =>{
                      const getstr = "/Meetings/Get/" + i[2].toString();
                      return getstr;
                    }}><button className="btn btn-primary">Get data</button></Link>
                    <button className="btn btn-primary" onClick = {()=>{
                      const urln = url + i[2].toString()
                      url_redirect(urln)}}>start call</button>
                    </div>
              </div>
              
            </div>
        ))
      }
      </div>
    
      {/* <div style={sty}>
        <div className="card">
          <div className="card-header">Meeting 2 :</div>
          <div className="card-body">
            <h5 className="card-title">Interviewee 2</h5>
                <div style= {ty}>
                <Link to = "/Meetings/Get2"><button className="btn btn-primary">Get data</button></Link>
                <Link to = "/Meetings/callme2"><button className="btn btn-primary">start call</button></Link>
                </div>
          </div>
        </div>

      </div>
      <div style={sty}>
        <div className="card">
          <div className="card-header">Meeting 3 :</div>
          <div className="card-body">
            <h5 className="card-title">Interviewee 3</h5>
                <div style= {ty}>
                <Link to = "/Meetings/Get3"><button className="btn btn-primary">Get data</button></Link>
                <Link to = "/Meetings/callme3"><button className="btn btn-primary">start call</button></Link>
                </div>
          </div>
        </div>

      </div>
      <div style={sty}>
        <div className="card">
          <div className="card-header">Meeting 4 :</div>
          <div className="card-body">
            <h5 className="card-title">Interviewee 4</h5>
                <div style= {ty}>
                <Link to = "/Meetings/Get4"><button className="btn btn-primary">Get data</button></Link>
                <Link to = "/Meetings/callme4"><button className="btn btn-primary">start call</button></Link>
                </div>
          </div>
        </div>

      </div> */}
    </>
  );
}
