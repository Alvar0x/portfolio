/* eslint-disable react-refresh/only-export-components */

import Home from '../pages/Home';
import Biography from '../pages/Biography';
import Specialties from '../pages/Specialties';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import PageProps from '../types/PageProps';
import WorkCardProps from '../types/WorkCardProps';

export const PAGES: { [key: string]: PageProps } = {
    'home': {
        title: 'Inicio',
        element: <Home key='home-page' />,
        option: 'home',
        lineWidth: '5px',
        left: '-10px'
    },
    'biography': {
        title: 'Biografía',
        element: <Biography key='biography-page' />,
        option: 'biography',
        lineWidth: '68px',
        left: '2px'
    },
    'specialties': {
        title: 'Especialidades',
        element: <Specialties key='specialties-page' />,
        option: 'specialties',
        lineWidth: '116px',
        left: '114px'
    },
    'projects': {
        title: 'Proyectos',
        element: <Projects key='projects-page' />,
        option: 'projects',
        lineWidth: '74px',
        left: '275px'
    },
    'contact': {
        title: 'Contacto',
        element: <Contact key='contact-page' />,
        option: 'contact',
        lineWidth: '70px',
        left: '393.5px'
    }
};

export const INITIAL_TEXT: { title: string, description: JSX.Element }[] = [
    {
        title: '¡Hola! Mi nombre es Álvaro',
        description: <p className='initial-text-description'>
            Quiero darte la bienvenida a mi página web. Está desarrollada
            por mí utilizando ReactJS, y todo lo que ves es puro CSS y
            TypeScript. La única librería que utilizo es Material UI Icons
            para decorar la página con iconos.
        </p>
    },
    {
        title: 'Bienvenido a mi portfolio',
        description: <div className='initial-text-description'>
            En este portfolio podrás conocerme en el ámbito laboral:<br />
            <ul style={{ marginLeft: '30px' }}>
                <li style={{ color: '#bbb' }}>¿Cómo y por qué tomé la decisión de ser programador web?</li>
                <li style={{ color: '#bbb' }}>¿Qué tecnologías se me dan mejor?</li>
                <li style={{ color: '#bbb' }}>¿Qué proyectos he desarrollado en mi experiencia laboral?</li>
                <li style={{ color: '#bbb' }}>¿Me gusta mi trabajo?</li>
            </ul>
            Todas estas preguntas y más serán respondidas en las distintas secciones.
            ¡Gracias por entrar!
        </div>
    },
    {
        title: 'Bienvenido a mi portfolio 3',
        description: <p className='initial-text-description'>
            En este portfolio podrás conocerme en el ámbito laboral.
            ¿Cómo y por qué tomé la decisión de ser programador web?
            ¿Qué tecnologías se me dan mejor? ¿Qué proyectos he
            desarrollado a lo largo de mi experiencia laboral?
            ¿Me gusta mi trabajo? Todas estas preguntas y más serán
            respondidas en las distintas secciones. ¡Gracias por entrar!
        </p>
    }
];

export const DEVELOPER_EXPERIENCE: WorkCardProps[] = [
    {
        id: '1',
        idColor: '#0d8',
        imagePath: '/src/assets/universidad.jpg',
        paragraphText:
            `Tras terminar bachillerato, inicié mi etapa como estudiante universitario
            en Ingeniería Informática en la Universidad de Córdoba (UCO). Por
            circunstancias personales y por falta de motivación, dejé la carrera
            tras un año y medio.`,
        paragraphColor: '',
        backgroundColor: '#404'
    },
    {
        id: '2',
        idColor: '#d80',
        imagePath: '/src/assets/programando.jpg',
        paragraphText:
            `Tras terminar bachillerato, inicié mi etapa como estudiante universitario
            en Ingeniería Informática en la Universidad de Córdoba (UCO). Por
            circunstancias personales y por falta de motivación, dejé la carrera
            tras un año y medio. Por
            circunstancias personales y por falta de motivación, dejé la carrera
            tras un año y medio.`,
        paragraphColor: '',
        backgroundColor: '#044'
    },
    {
        id: '3',
        idColor: '#d08',
        imagePath: '/src/assets/aprendiendo.jpg',
        paragraphText:
            `Tras terminar bachillerato, inicié mi etapa como estudiante universitario
            en Ingeniería Informática en la Universidad de Córdoba (UCO). Por
            circunstancias personales y por falta de motivación, dejé la carrera
            tras un año y medio. Por
            circunstancias personales y por falta de motivación, dejé la carrera
            tras un año y medio.`,
        paragraphColor: '',
        backgroundColor: '#440'
    },
    {
        id: '4',
        idColor: '#80d',
        imagePath: '/src/assets/programacion-web.jpg',
        paragraphText:
            `Tras terminar bachillerato, inicié mi etapa como estudiante universitario
            en Ingeniería Informática en la Universidad de Córdoba (UCO). Por
            circunstancias personales y por falta de motivación, dejé la carrera
            tras un año y medio.`,
        paragraphColor: '',
        backgroundColor: '#484'
    },
    {
        id: '5',
        idColor: '#08d',
        imagePath: '/src/assets/cgi.jpg',
        paragraphText:
            `Tras terminar bachillerato, inicié mi etapa como estudiante universitario
            en Ingeniería Informática en la Universidad de Córdoba (UCO). Por
            circunstancias personales y por falta de motivación, dejé la carrera
            tras un año y medio.`,
        paragraphColor: '',
        backgroundColor: '#848'
    }
]