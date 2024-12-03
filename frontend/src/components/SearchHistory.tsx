import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks'; // Typowane hooki Redux
import {fetchLocations, removeLocation} from '../../redux/locationSlice'; // Akcja usuwania lokalizacji


const SearchHistory: React.FC = () => {
  const locations = useAppSelector((state) => state.locations.locations); // Pobieramy lokalizacje ze stanu Redux
  const dispatch = useAppDispatch(); // Hook do wysyłania akcji Redux

  const handleDelete = (id: string) => {
    dispatch(removeLocation(id)); // Wywołanie akcji usuwania
  };

  useEffect(()=>{
    dispatch(fetchLocations());
  }, [dispatch, locations]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Historia wyszukiwań</h3>
      <ul
        style={{
          listStyleType: 'none',
          padding: 0,
          display: 'flex',
          flexDirection: 'column-reverse',
          alignItems: 'center',
        }}
      >
        {locations.map((location) => (
          <li
            key={location._id}
            style={{
              cursor: 'pointer',
              marginBottom: '10px',
              border: '1px solid #ccc',
              padding: '10px',
              width: '80%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>{location.locationName}</span>
            <button
              onClick={() => handleDelete(location._id)}
              style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
            >
              Usuń
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
