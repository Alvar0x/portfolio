import { useHome } from '../hooks/useHome';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useSlider } from '../hooks/useSlider';
import * as Constants from '../utils/constants'

function Home() {
    useHome();
    const { newSliderOption, setNewSliderOption, previousSliderOption } = useSlider();

    const onClickSliderButtonHandler = (event: React.MouseEvent) => {
        const sliderElements = [...document.querySelectorAll('.initial-text')].length;
        const buttonClicked = event.target as HTMLSpanElement;

        previousSliderOption.current = newSliderOption;
        setNewSliderOption(s => {
            if (buttonClicked.id === 'right-slider-button') return s < sliderElements ? s + 1 : s;
            else return s > 1 ? s - 1 : s;
        });
    }

    return (
        <>
            <section id='home-page' className='page-section'>
                <article className='home-page-article'>
                    <div className='profile-image-container initial appears'>
                        <div className='profile-image-fixer'>
                            <div className='img' />
                        </div>
                    </div>
                    <div className='initial-text-container initial'>
                        <span id='left-slider-button' className='slider-button' onClick={onClickSliderButtonHandler}>
                            <KeyboardArrowLeftIcon />
                        </span>
                        <div className='slider-center'>
                            <div className='initial-text-slider'>
                                {
                                    Constants.INITIAL_TEXT.map((it, i) => (
                                        <div key={'initial-text-' + i} id={'initial-text-' + (i + 1)} className={'initial-text' + (i !== 0 ? ' slider-right' : '')}>
                                            <h1>{it.title}</h1>
                                            {it.description}
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="slider-dots-container">
                                {Constants.INITIAL_TEXT.map((_e, i) => (
                                    <i key={'slider-dot-' + i} id={'slider-dot-' + (i + 1)} className={'slider-dot' + (i === 0 ? ' selected' : '')}></i>
                                ))}
                            </div>
                        </div>
                        <span id='right-slider-button' className='slider-button' onClick={onClickSliderButtonHandler}>
                            <KeyboardArrowRightIcon />
                        </span>
                    </div>
                </article>
            </section>
        </>
    );
}

export default Home