
import About from './about';
import Projects from './projects';
import Contact from './contact';

const Content: React.FC = () => {

    return (
        <div className='content'>
            <About />
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Content