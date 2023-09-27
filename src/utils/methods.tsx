import * as Constants from '../utils/constants'

type NavbarProps = {
    newPageOption: string,
    linkElement: HTMLElement,
    setLineWidth: React.Dispatch<React.SetStateAction<string>>,
    setLeftPosition: React.Dispatch<React.SetStateAction<string>>
}

export function setNavigationBar({ newPageOption, linkElement, setLineWidth, setLeftPosition }: NavbarProps) {
    document.querySelectorAll('.selected').forEach(s => {
        s.classList.remove('selected');
    });
    if (newPageOption !== 'home') {
        linkElement.classList.add('selected');
        (document.querySelector('.link-underline') as HTMLElement).style.opacity = '1';
    } else {
        (document.querySelector('.link-underline') as HTMLElement).style.opacity = '0';
    }
    setLineWidth(Constants.PAGES[newPageOption].lineWidth);
    setLeftPosition(Constants.PAGES[newPageOption].left);
}

export function getTransitionEndEventName() {
    const transitions: { [key: string]: string } = {
        "transition": "transitionend",
        "OTransition": "oTransitionEnd",
        "MozTransition": "transitionend",
        "WebkitTransition": "webkitTransitionEnd"
    }
    const bodyStyle = document.body.style;
    for (const transition in transitions) {
        if (bodyStyle.getPropertyValue(transition) != undefined) {
            return transitions[transition];
        }
    }
}