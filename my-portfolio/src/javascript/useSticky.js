import { useState, useEffect, useRef } from 'react'; 


export const useSticky = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [initialOffsetTop, setInitialOffsetTop] = useState(0);
    const ref = useRef(null);
  
    useEffect(() => {
      if (ref.current) {
        setInitialOffsetTop(ref.current.offsetTop);
      }
  
      const handleScroll = () => {
        if (ref.current) {
          const scrollY = window.scrollY; // Current scroll position
          setIsSticky(scrollY >= initialOffsetTop);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [initialOffsetTop]);
  
    return { ref, isSticky };
  };
  