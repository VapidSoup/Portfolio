import React, { useEffect } from "react";
import "../javascript/slideshowScript";

const Slideshow = () => {
    useEffect(() => {
      // Initialize the slideshow targeting .leftPicAbout
      window.initSlideshow(".leftPicAbout", "photo-picker");
    }, []);
  
    return (
      <div className="leftPicAbout">
        <div id="photo-picker" style={{ marginTop: "10px" }}></div>
      </div>
    );
  };

export default Slideshow;
