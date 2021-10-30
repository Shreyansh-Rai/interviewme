import React from "react";
import { useParams } from "react-router";

export default function () {
  // const uID = useParams();
  // console.log(uID);
  const st = window.location.href;
  const id = st.slice(35, st.length);
//   console.log(parseInt (id));
  const url = "http://localhost:4000/Meetings/Get/" + id
  const data = parseInt(id);
  fetch(url, {

    method: "POST",
    headers: {
        "Content-type": "application/json",
      },
    body: JSON.stringify({uID : data}),
    
  }).then((response) => response.json())
    .then((json) => console.log(json));
  return <h2></h2>;
}
