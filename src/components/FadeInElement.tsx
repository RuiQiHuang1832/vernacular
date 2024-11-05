import  { useEffect, useRef, useState,ReactNode } from 'react';
const FadeInElement = ({ children, value }: {children:ReactNode, value:string}) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef(null);
  
    useEffect(() => {
      const current = domRef.current;
      if (!current) return;
  
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      });
  
      observer.observe(current);
      return () => observer.unobserve(current);
    }, []);
  
    return (
      <div
        className={`${value} ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {children}
      </div>
    );
  };

  export default FadeInElement
  