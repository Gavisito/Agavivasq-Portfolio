import { MapContainer, TileLayer, Marker} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="contact">
      <div className="Contact-Form">
        <h2>Contact Me</h2>
        <form>
          <div className="fm-row-one">
            <div className="inputs_section">
              <label htmlFor="from_name">Name:</label>
              <input type="text" name="from_name" placeholder="Enter Your Name" required />
            </div>
            <div className="inputs_section">
              <label htmlFor="from_email">Email:</label>
              <input type="email" name="from_email" placeholder="Enter Your Email" required />
            </div>
          </div>
          <div className="fm-row-two">
          <div className="inputs_section">
              <label htmlFor="message">Message:</label>
              <textarea name="message" placeholder="Write your inquires, comments, and concerns here. Thank you!" required />
            </div>
          </div>
          <div>
            <input type="submit" name="submitbtn" value="Send Message" required />
          </div>
        </form>
      </div>
      <div className="leafletMap">
        <MapContainer center={[38.8315, -77.3117]} zoom={13} >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[38.8315, -77.3117]}/>
          </MapContainer>
          <div className="mapInfo">
              <h3>Location & Contacts</h3>
              <h5 style={{marginBottom: '5%'}}>Save them for later!</h5>
              <p>Phone: <a href="tel:5716429492">(571)-642-9492</a></p>
              <p>Email: <a href="mailto:agavivasq@gmail.com">agavivasq@gmail.com</a></p>
          </div>


      </div>
    </div>
  );
};

export default Contact;
