import './App.css'
import { useEffect, useRef, useState } from 'react';
import * as Constants from './utils/constants'
import * as Methods from './utils/methods'
import PageProps from './types/PageProps';

function App() {
	const LOGO_TEXT: string = 'Portfolio';
	const [pageSelected, setPageSelected] = useState<PageProps>(Constants.PAGES['home']);
	const [lineWidth, setLineWidth] = useState<string>('5px');
	const [leftPosition, setLeftPosition] = useState<string>('-10px');
	const newPageName = useRef('home');
	let canActivateAnimation: boolean = true;

	useEffect(() => {
		const scrollHandler = () => {
			const header = document.getElementById('web-header') as HTMLElement;
			header.classList.toggle('inverted', window.scrollY >= window.innerHeight && window.scrollY < 2 * window.innerHeight);

			const scrolldownTip = document.getElementById('scrolldown-tip') as HTMLElement;
			scrolldownTip.classList.toggle('disappears', window.scrollY > 0);

			const mainDataCards = document.querySelectorAll('.main-data-card>article');
			const pixelQuantity = (90 * window.scrollY) / (window.innerHeight - (0.25 * window.innerHeight));
			const opacityQuantity = 1 - (window.scrollY / (window.innerHeight - (0.25 * window.innerHeight)));
			mainDataCards.forEach((card, i) => {
				const cardElement = card as HTMLElement;
				cardElement.style.transition = '0.05s linear';
				const translateAxis = i === 0 || i === 3 ? 'X' : 'Y';
				const finalPixels = i === 0 || i === 1 ? pixelQuantity * -1 : pixelQuantity;

				cardElement.style.transform = `translate${translateAxis}(${finalPixels}px)`;
				cardElement.style.opacity = opacityQuantity.toString();
			});

			const workCards = [...document.getElementsByClassName('work-card')];
			workCards.forEach((wc, i) => {
				wc.classList.toggle('hide-header', window.scrollY < (i + 1) * 0.08 * 2 * window.innerHeight)
			})
		}
		window.addEventListener('scroll', scrollHandler);

		return () => {
			window.removeEventListener('scroll', scrollHandler);
		}
	}, []);

	useEffect(() => {
		const nextPage = document.getElementById(newPageName.current + '-page') as HTMLElement;
		setTimeout(() => {
			nextPage.style.opacity = '1';
		}, 50);
	}, [pageSelected]);

	const onClickLinkHandler = (newPageOption: string, linkElement: HTMLElement) => {
		if (newPageOption === 'home' && canActivateAnimation) {
			canActivateAnimation = false;
			const logoLink = document.getElementById('logo-link') as HTMLLinkElement;
			logoLink.classList.add('animating');
			setTimeout(() => {
				logoLink.classList.remove('animating');
				canActivateAnimation = true;
			}, 650);
		}

		if (pageSelected.option !== newPageOption) {
			const newPage = Constants.PAGES[newPageOption];
			const previousPage = document.getElementById(pageSelected.option + '-page') as HTMLElement;
			newPageName.current = newPageOption;

			previousPage.style.opacity = '0';
			setTimeout(() => {
				setPageSelected(newPage);
			}, 150);

			Methods.setNavigationBar({ newPageOption, linkElement, setLineWidth, setLeftPosition });
		}
	}

	return (
		<>
			<header id='web-header' className='web-header'>
				<section className='web-logo-container'>
					<div onClick={(e) => onClickLinkHandler('home', e.target as HTMLElement)} id='logo-link'>
						{
							[...LOGO_TEXT].map((letter, i) => (
								<h1 key={i} className='web-logo' style={{ animationDelay: i * 0.05 + 's' }}>{letter}</h1>
							))
						}
					</div>
				</section>
				<section className='navbar-container'>
					<ul className='navbar'>
						{
							Object.values(Constants.PAGES).filter(f => f.title !== 'Inicio').map(page => (
								<li key={page.option}><span onClick={(e) => onClickLinkHandler(page.option, e.target as HTMLElement)}>{page.title}</span></li>
							))
						}
					</ul>
					<i className='link-underline' style={{ width: lineWidth, left: leftPosition }}></i>
				</section>
			</header>
			<main className='web-main'>
				{
					pageSelected.element
				}
			</main>
		</>
	)
}

export default App
