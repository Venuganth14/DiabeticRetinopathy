"use client"

import React, { useState, useEffect } from 'react';
import { ChevronsUp } from 'lucide-react';

import { Button } from '@/components/ui/button';

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle the scroll event
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Function to handle the click event
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        isVisible && (
            <Button
                onClick={scrollToTop}
                className="fixed right-4 bottom-4 lg:bottom-8 lg:right-8 text-white bg-purple-600 hover:bg-purple-800  hover:text-white p-2 rounded-none rounded-tl-md border-none rounded-br-md cursor-pointer z-40 "
                aria-label="Go to top"
            >
                <ChevronsUp /> 
            </Button>
        )
    );
};

export default BackToTopButton;
