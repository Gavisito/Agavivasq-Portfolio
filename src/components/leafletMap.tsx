import { MapContainer, TileLayer, Marker} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map: React.FC = () => {
  return (
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
  );
};

export default Map;