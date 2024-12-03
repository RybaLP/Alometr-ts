import {configureStore} from "@reduxjs/toolkit";
import locationReducer from "./locationSlice";

const store = configureStore({
    reducer : {
        locations: locationReducer,
    }
});

export default store;