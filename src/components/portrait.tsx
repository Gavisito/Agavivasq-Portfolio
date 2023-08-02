const Portrait: React.FC = () => {

    return(
        <div id="home" className="overlay">
        <div className="img-container">
            <img className="img" src="/portrait.jpg" alt="AGV Original Conetent Portrait"/>
            <div className="intro">
                <div className="intro-text">
                    <h1>Hi, I'm Anthony Gavidia-Vasquez</h1>
                </div>
                <div className="summary">
                    <h5>A Web Developer & Artist catering to your web development needs
                        through creation of captivating online experiences with boundless creativity.<br/>
                    </h5>
                </div> 
            </div>
        </div>
    </div>
    );
};

export default Portrait;