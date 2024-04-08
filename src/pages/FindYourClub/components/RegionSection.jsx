import { useState } from 'react';
import '../styles/FindYourClub.css';
import Map from './Map';

const RegionSection = () => {
    const [chosenRegion, setChosenRegion] = useState('london');
    return ( 
        <div className="region-section">
            <div className="region-selector">
                <p id="desktop">Select your region</p>
                <p id="mobile">Region</p>
                <select
                name="regions" id="regions"
                value={ chosenRegion }
                onChange = { e => {
                    setChosenRegion(e.target.value)
                } }
                >
                    <option value="london">London</option>
                    <option value="wales">Wales</option>
                    <option value="scotland">Scotland</option>
                    <option value="northern+ireland">Northern Ireland</option>
                    <option value="south+west+england">South West England</option>
                    <option value="east+midlands">East Midlands</option>
                    <option value="west+midlands">West Midlands</option>
                    <option value="south+east">South East</option>
                    <option value="east+of+england">East of England</option>
                    <option value="north+west">North West</option>
                    <option value="north+east">North East</option>
                    <option value="yorkshire">Yorkshire</option>
                </select>
            </div>

            <div className="map-container">
                <Map region={ chosenRegion } />
            </div>
        </div>
     );
}
 
export default RegionSection;