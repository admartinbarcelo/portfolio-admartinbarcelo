import './skills.css'
import Frontend from './Frontend';

function Skills () {
    return(
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills_container container grid">
            <Frontend/>

            </div>
        </section>

    )
}

export default Skills;