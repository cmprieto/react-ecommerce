import { MapContainer, TileLayer,  Marker, Popup } from "react-leaflet";

const Mapa = () => {
  const positionMap = [41.38879,2.16093];
  return (
    <div className="mapa">
      <MapContainer center={[41.38879,2.16093]} zoom={30} scrollWheelZoom={true}  style={{ width: "auto", height: "450px" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
       <Marker position={positionMap}>
          <Popup>
            Aquí nos puedes encontrar:<br/>Plaça Letamendi 12, Barcelona
          </Popup>
        </Marker> 
      </MapContainer>
    </div>
  );
};

export default Mapa;
