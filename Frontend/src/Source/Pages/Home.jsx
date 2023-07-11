import React, { useState } from "react";

import '../Styles/Home.css'
import { Link } from "react-router-dom";

function Home() {
  const [tools, setTools] = useState([
    { name: 'Image To PDF Conveter', description: 'It will help in converting image to pdf', path: '/pdfconverter' },
    { name: 'Paste To Send', description: 'It will help in converting large data into a link which is shareable', path: '/paste' },
    { name: 'YouTube Video Downlaoder ', description: 'It will help you in downloading youtube video Comming soon', path: '/ytdownloader' }
  ])
  

  return (
    <div className="container">

      <div>
        {tools?.map((tool) => {
          return (
            <div className="home_link">
              <Link to={tool.path}  >
                
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>

              </Link>
              </div>
            )
          })}
      </div>
    </div>
  );

}

export default Home;
