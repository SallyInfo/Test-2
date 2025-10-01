import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollUp() {
    const { pathname } = useLocation();

    useEffect(()=>{
        window.screenTop({
          top:0,
          behavior:"smooth"
        });

    },[pathname]);

  return null;
}

export default ScrollUp;
