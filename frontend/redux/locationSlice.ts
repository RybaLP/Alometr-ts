import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Location {
    _id: string;
    locationName: string;
    coordinates?: { lat: number; lng: number };
}

interface LocationsState {
    locations: Location[];
    error: string | null;
}

const initialState: LocationsState = {
  locations: [],
  error: null,
};

const locationSlice = createSlice({
    name: "locations",
    initialState,
    reducers: {
        addLocation(state,action: PayloadAction<Location>){
            state.locations.push(action.payload);
        }
    }
})

export const {addLocation} = locationSlice.actions;
export default locationSlice.reducer;

