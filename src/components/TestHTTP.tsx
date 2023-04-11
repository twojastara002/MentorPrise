import React from "react";
import { useState } from "react";

function TestHTTP() {
  let [updateText, setUpdateText] = useState("");
  var xhr = new XMLHttpRequest();

  xhr.onload = () => {
    setUpdateText(xhr.responseText);
  };
  xhr.open("GET", "http://localhost:3000/login/u1-password");
  xhr.send();

  return <div>{updateText}</div>;
}

export default TestHTTP;
