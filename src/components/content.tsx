import About from './about';
import Art from './artProjects';
import WebApps from './webApps';
import Contact from './contact';

const Content: React.FC = () => {

    return (
        <div className='content'>
            <About />
            <Art/>
            <WebApps/>
            <Contact/>
        </div>
    )
}

export default Content