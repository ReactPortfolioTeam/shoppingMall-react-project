import { useEffect, useState } from 'react';

let timer: any;

export function useScroll() {
    const [scrollY, setScrollY] = useState<number>(0);
    const listener = () => {
        setScrollY(window.pageYOffset);
    };
    useEffect(() => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            window.addEventListener('scroll', listener);
        }, 50);

        return () => {
            window.removeEventListener('scroll', listener);
        };
    }, []);

    return {
        scrollY,
    };
}
