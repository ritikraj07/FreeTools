import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import '../Styles/Home.css'
import Copy from "../Components/Copy";
import Paste from "../Components/Paste"
import { useDispatch, useSelector } from "react-redux";
import { TEST } from "../Redux/Constant";

function Home() {
  let dispatch = useDispatch()
  const [window, setwindow] = useState(true)

  return (
    <div className="container">
      {window ? <Paste setwindow={setwindow} /> : <Copy setwindow={setwindow} />}
      
      
    </div>
  );

}

export default Home;
