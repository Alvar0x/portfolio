import { useEffect, useRef, useState } from "react";

export function useSlider() {
    const [newSliderOption, setNewSliderOption] = useState<number>(1);
    const previousSliderOption = useRef<number>(1);

    useEffect(() => {
        const sliderElements = [...document.querySelectorAll('.initial-text')].length;
        const previousElement = document.getElementById(`initial-text-${previousSliderOption.current}`) as HTMLElement;
        const newElement = document.getElementById(`initial-text-${newSliderOption}`) as HTMLElement;
        const leftButton = document.getElementById('left-slider-button') as HTMLSpanElement;
        const rightButton = document.getElementById('right-slider-button') as HTMLSpanElement;
        const previousDot = document.getElementById(`slider-dot-${previousSliderOption.current}`) as HTMLElement;
        const newDot = document.getElementById(`slider-dot-${newSliderOption}`) as HTMLElement;

        if (newSliderOption === 1) leftButton.classList.add('disabled');
        else if (previousSliderOption.current === 1) leftButton.classList.remove('disabled');

        if (newSliderOption === sliderElements) rightButton.classList.add('disabled');
        else if (previousSliderOption.current === sliderElements) rightButton.classList.remove('disabled');

        newElement.classList.remove('slider-left');
        newElement.classList.remove('slider-right');

        if (newSliderOption < previousSliderOption.current) previousElement.classList.add('slider-right');
        else if (newSliderOption > previousSliderOption.current) previousElement.classList.add('slider-left');

        previousDot.classList.remove('selected');
        newDot.classList.add('selected');
    }, [newSliderOption]);

    return { newSliderOption, setNewSliderOption, previousSliderOption }
}