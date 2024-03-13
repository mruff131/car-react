import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        email: 'Email',
        phone_number: "Phone Number",
        address: "Address",
        make: null,
        model: null,
        year: null,
        color: null,
        vin: null
    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseMake: (state, action) => { state.make = action.payload }, // All we're doing is setting the input to the state.name
        chooseModel: (state, action) => { state.model = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        chooseColor: (state, action) => { state.color = action.payload },
        chooseVIN: (state, action) => { state.vin = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseYear, chooseColor, chooseVIN } = rootSlice.actions