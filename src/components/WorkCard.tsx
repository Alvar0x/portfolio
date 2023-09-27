import WorkCardProps from '../types/WorkCardProps';

export function WorkCard({ workExperience }: { workExperience: WorkCardProps }) {
    return (
        <article className='work-card hide-header'>
            <header>
                <img src={workExperience.imagePath} alt='universidad' />
            </header>
            <main style={{ background: workExperience.backgroundColor }}>
                <div className='work-card-index' style={{ background: workExperience.backgroundColor, color: workExperience.idColor }}>
                    <i style={{ boxShadow: '-5px 5px 0 5px ' + workExperience.backgroundColor }}></i>
                    {workExperience.id}
                </div>
                <p style={{ color: workExperience.paragraphColor }}>
                    {workExperience.paragraphText}
                </p>
            </main>
        </article>
    );
}

export default WorkCard