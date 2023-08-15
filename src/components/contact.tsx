import ContactForm from "./contactForm";
import Map from "./leafletMap";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="contact">
      <ContactForm/>
      <Map/>
    </div>
  );
};

export default Contact;
