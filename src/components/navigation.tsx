import { Nav, Navbar } from "react-bootstrap";

const Navigation: React.FC = () => {
    const toggleActive = () => {
        const hamburger = document.querySelector(".ham-icon");
        const navigation = document.querySelector(".nav");

        if (hamburger && navigation){
            hamburger.classList.toggle("active");
            navigation?.classList.toggle("active");
        }
    };

    return(
        <div>
            <Navbar className="navigation" fixed="top" expand="sm">
                <div className="branding">
                    <div><a href="#home" className="company-logo">
                        <img src="/public/agavivasq.ico" className="gavipic"/></a>
                    </div>
                    <div><a href="#home" className="company-name">Agavivasq</a></div>
                </div>
                <Nav className="nav">
                    <Nav.Link href="#about" className="nav-link">About</Nav.Link>
                    <Nav.Link href="#art" className="nav-link">Art Projects</Nav.Link>
                    <Nav.Link href="#webapps" className="nav-link">Web Projects</Nav.Link>
                    <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
                </Nav>
                <div className="ham-icon" onClick={toggleActive}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                </div>
            </Navbar>
        </div>
    );
}

export default Navigation;