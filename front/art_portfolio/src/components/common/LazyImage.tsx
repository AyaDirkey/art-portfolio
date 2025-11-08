// components/LazyImage.tsx
import { useState, useRef, useEffect, type ReactNode } from 'react';

export interface Award {
  id: number; 
  photo?: string; 
  ar_title: string;
  en_title: string;
}

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder: ReactNode; 
}

const LazyImage = ({ src, alt, className, placeholder }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    const currentImgRef = imgRef.current;
  
    if (currentImgRef) {
        observer.observe(currentImgRef);
    }

    return () => {
        // Use the stored variable in the cleanup function
        if (currentImgRef) {
        observer.unobserve(currentImgRef);
        }
    };
  }, []);

  return (
    <div ref={imgRef} className="w-full h-full flex items-center justify-center">
      {!isLoaded && placeholder}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={className}
          onLoad={() => setIsLoaded(true)}
          style={{ display: isLoaded ? 'block' : 'none' }}
        />
      )}
    </div>
  );
};

export default LazyImage;