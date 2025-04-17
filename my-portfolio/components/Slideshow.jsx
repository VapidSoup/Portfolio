import React, { useEffect } from "react";

const Slideshow = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            // Dynamically load the slideshow script
            const script = document.createElement("script");
            script.src = "/javascript/slideshowScript.js"; // Adjust path if necessary
            script.async = true;
            script.onload = () => {
                if (window.initSlideshow) {
                    window.initSlideshow(".leftPicAbout", "photo-picker");
                }
            };
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }
    }, []);

    return (
        <div className="leftPicAbout">
            <div id="photo-picker" style={{ marginTop: "10px" }}></div>
        </div>
    );
};

export default Slideshow;
