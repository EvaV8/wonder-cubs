
const Map = ({ region }) => {
    const apiKey = process.env.REACT_APP_MAPS_API_KEY;

    return ( 
        <div className="map-frame">
            <iframe
                title="map-southWest"
                width="600"
                height="400"
                zoom='21'
                // zoom={zoom}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/search?key=${apiKey}&q=junior+girls+football+clubs+in+${region}`}
                // src="https://www.google.com/maps/embed/v1/MAP_MODE?key=YOUR_API_KEY&PARAMETERS"
                allowFullScreen>
            </iframe>
        </div>
     );
}
 
export default Map;



