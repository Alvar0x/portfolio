import { useEffect } from 'react'

export function useHome() {

    useEffect(() => {
        const imageContainer = document.querySelector('.profile-image-container') as HTMLElement;
        const textContainer = document.querySelector('.initial-text-container') as HTMLElement;

        setTimeout(() => {
            imageContainer.classList.remove('appears');
            setTimeout(() => {
                imageContainer.classList.remove('initial');
                textContainer.classList.remove('initial');
                setTimeout(() => {
                    imageContainer.classList.add('animating');
                }, 500);
            }, 10);
        }, 500);
    }, []);
}