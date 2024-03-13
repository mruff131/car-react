import { useState, useEffect } from 'react'
import { server_calls } from '../api/server'

export interface carData {
    car_id: string, 
    car_make: string,
    car_model: string,
    car_year: string,
    car_color: string,
    car_vin: string,
    id?: string
}


export const useGetData = () => {
    const [ contactData, setData ] = useState<carData[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { contactData, getData:handleDataFetch}
}

















// import { useState, useEffect } from 'react'
// import { server_calls } from '../api/server'

// // Define a type or interface for the shape of the objects fetched from the server
// interface Contact {
//     carID: string;
//     // Add other properties here as needed
// }

// export const useGetData = () => {
//     const [contactData, setData] = useState<Contact[]>([]) // Use the defined type/interface

//     async function handleDataFetch() {
//         const result = await server_calls.get();
//         // Ensure each contact object has a unique `id` property using index-based IDs
//         const dataWithIds = result.map((contact: Contact, index: number) => ({ // Add type annotation for `contact`
//             ...contact,
//             id: index.toString()
//         }));
//         setData(dataWithIds);
//     }

//     useEffect(() => {
//         handleDataFetch();
//     }, [])

//     return { contactData, getData: handleDataFetch }
// }
