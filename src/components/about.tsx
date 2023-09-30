const About: React.FC = () => {

    return(
        <div id="about" className="about-me">
            <div className="about-section-title"> 
                <h1>About Me</h1>
            </div>
            <div className="about-row">
                <div className="header-sector">
                    <h1 className="about-section-title">Who Am I?</h1>
                </div>
                <div className="content-sector">
                    <h1 className="about-section-title">What Are My Skills?</h1>
                </div>
            </div>
        </div>
    );
};

export default About;