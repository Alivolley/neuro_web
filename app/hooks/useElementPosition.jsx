import { useEffect, useState, useRef } from 'react';

const useElementPosition = () => {
    const [elementPosition, setElementPosition] = useState(null);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setElementPosition(entry);
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return [elementRef, elementPosition];
};

export default useElementPosition;
