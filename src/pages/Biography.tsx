import LabelIcon from '@mui/icons-material/Label';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import CakeIcon from '@mui/icons-material/Cake';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LanguageIcon from '@mui/icons-material/Language';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkCard from '../components/WorkCard';
import { DEVELOPER_EXPERIENCE } from '../utils/constants';
import { useMainData } from '../hooks/useMainData';

function Biography() {
    const { myBirthdayString, myAge } = useMainData();

    return (
        <>
            <section id='biography-page' className='page-section'>
                <article id='main-bio-data' className='page-article'>
                    <div className='inner-bio'>
                        <header>
                            <h1>Datos principales</h1>
                        </header>
                        <main>
                            <section className='main-data-card'>
                                <article className='hidden'>
                                    <header>
                                        <h3>Nombre y edad</h3>
                                    </header>
                                    <main>
                                        <div>
                                            <LabelIcon htmlColor='#ddd' />
                                            <span>Álvaro Navas Soto</span>
                                        </div>
                                        <div>
                                            <CakeIcon htmlColor='#ddd' />
                                            <span>{myAge} años</span>
                                        </div>
                                    </main>
                                </article>
                            </section>
                            <section className='main-data-card'>
                                <article className='hidden'>
                                    <header>
                                        <h3>Nacimiento</h3>
                                    </header>
                                    <main>
                                        <div>
                                            <FmdGoodIcon htmlColor='#ddd' />
                                            <span>Pozoblanco (Córdoba, España)</span>
                                        </div>
                                        <div>
                                            <ChildCareIcon htmlColor='#ddd' />
                                            <span>{myBirthdayString}</span>
                                        </div>
                                    </main>
                                </article>
                            </section>
                            <section className='main-data-card'>
                                <article className='hidden'>
                                    <header>
                                        <h3>Estudios</h3>
                                    </header>
                                    <main>
                                        <div>
                                            <MenuBookIcon htmlColor='#ddd' />
                                            <span>ESO</span>
                                        </div>
                                        <div>
                                            <MenuBookIcon htmlColor='#ddd' />
                                            <span>Bachillerato</span>
                                        </div>
                                        <div>
                                            <MenuBookIcon htmlColor='#ddd' />
                                            <span>Grado Superior en DAW</span>
                                        </div>
                                    </main>
                                </article>
                            </section>
                            <section className='main-data-card'>
                                <article className='hidden'>
                                    <header>
                                        <h3>Idiomas</h3>
                                    </header>
                                    <main>
                                        <div>
                                            <LanguageIcon htmlColor='#ddd' />
                                            <span>Inglés (B1)</span>
                                        </div>
                                        <div>
                                            <LanguageIcon htmlColor='#ddd' />
                                            <span>Portugués (Experiencia)</span>
                                        </div>
                                    </main>
                                </article>
                            </section>
                        </main>
                    </div>
                    <div id='scrolldown-tip' className='scrolldown-tip'>
                        <h1>SCROLL</h1>
                        <img src='/src/assets/flecha-curva.png' alt='flecha curva' />
                    </div>
                </article>
                <article id='work-experience' className='page-article'>
                    <div className='inner-work'>
                        <h1>Inicio como desarollador</h1>
                        <section className='work-cards-container'>
                            {
                                DEVELOPER_EXPERIENCE.map(exp => (
                                    <WorkCard workExperience={exp} />
                                ))
                            }
                        </section>
                    </div>
                </article>
                <article id='personality' className='page-article'>
                    <div className='inner-personality'>
                        <h1>Mi personalidad</h1>
                    </div>
                </article>
            </section>
        </>
    );
}

export default Biography