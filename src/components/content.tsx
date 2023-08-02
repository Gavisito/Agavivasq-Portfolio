import About from './about';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';

const Content: React.FC = () => {

    return (
        <div className='content'>
            <About />
            <Projects/>
            <Resume/>
            <Contact/>
        </div>
    )
}

export default Content