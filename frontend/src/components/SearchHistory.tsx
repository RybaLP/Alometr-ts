import React, {useEffect, useState} from "react";
import {fetchHistory} from "../../api/locationService";
import { deleteLocation } from "../../api/locationService";
import { UseSelector } from "react-redux";

interface Location {
  _id: string, 
  locationName: string, 
  coordinates : {lat : number , lng : number};
}

const SearchHistory = () => {

    const [locations, setLocations] = useState<Location[]>([]);
    const [error, setError] = useState<string | null>(null);

    const hadnleDelete = async(id : string) =>{
        console.log("Deleting location with id:", id); 
        await deleteLocation(id);
        fetchData();
    }

    const fetchData = async () => {
      try {
        const data = await fetchHistory();
        console.log("dane pobrane z api : ", data);
        setLocations(data); // Ustawienie lokalizacji w stanie
      } catch (err) {
        console.error("Błąd podczas pobierania lokalizacji:", err);
        setError("Nie udało się pobrać lokalizacji");
      }
    };
    
    useEffect(() => {
      fetchData();
    }, []);

    return (
      <div style={{ textAlign: 'center' }}>
      <h3>Poprzednie wyszukiwania</h3>
      <ul style={{ listStyleType: 'none', padding: 0, display: "flex", flexDirection: "column-reverse" }}>
        {locations.map((location) => (
          <li key={location._id}style={{ cursor: 'pointer', marginBottom: '5px' }}>
            {location.locationName};
            <button onClick={()=>{hadnleDelete(location._id)}}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
    );

};
  
  export default SearchHistory;